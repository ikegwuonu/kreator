"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

interface ColorPickerProps {
  isOpen: boolean;
  onClose: () => void;
  onColorSelect: (color: string) => void;
  initialColor?: string;
}

export default function ColorPicker({
  isOpen,
  onClose,
  onColorSelect,
  initialColor = "#FB2424",
}: ColorPickerProps) {
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(100);
  const [brightness, setBrightness] = useState(100);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hueCanvasRef = useRef<HTMLCanvasElement>(null);

  // Convert HSB to hex
  const hsbToHex = (h: number, s: number, b: number) => {
    const c = (b / 100) * (s / 100);
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = b / 100 - c;

    let r = 0,
      g = 0,
      bl = 0;

    if (h >= 0 && h < 60) {
      r = c;
      g = x;
      bl = 0;
    } else if (h >= 60 && h < 120) {
      r = x;
      g = c;
      bl = 0;
    } else if (h >= 120 && h < 180) {
      r = 0;
      g = c;
      bl = x;
    } else if (h >= 180 && h < 240) {
      r = 0;
      g = x;
      bl = c;
    } else if (h >= 240 && h < 300) {
      r = x;
      g = 0;
      bl = c;
    } else if (h >= 300 && h < 360) {
      r = c;
      g = 0;
      bl = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    bl = Math.round((bl + m) * 255);

    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${bl.toString(16).padStart(2, "0")}`.toUpperCase();
  };

  // Draw the main color picker canvas
  const drawColorPicker = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Create the hue color
    const hueColor = `hsl(${hue}, 100%, 50%)`;

    // Create horizontal gradient (saturation)
    const saturationGradient = ctx.createLinearGradient(0, 0, width, 0);
    saturationGradient.addColorStop(0, "white");
    saturationGradient.addColorStop(1, hueColor);

    ctx.fillStyle = saturationGradient;
    ctx.fillRect(0, 0, width, height);

    // Create vertical gradient (brightness)
    const brightnessGradient = ctx.createLinearGradient(0, 0, 0, height);
    brightnessGradient.addColorStop(0, "transparent");
    brightnessGradient.addColorStop(1, "black");

    ctx.fillStyle = brightnessGradient;
    ctx.fillRect(0, 0, width, height);
  };

  // Draw the hue slider
  const drawHueSlider = () => {
    const canvas = hueCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, "#ff0000");
    gradient.addColorStop(0.17, "#ffff00");
    gradient.addColorStop(0.33, "#00ff00");
    gradient.addColorStop(0.5, "#00ffff");
    gradient.addColorStop(0.67, "#0000ff");
    gradient.addColorStop(0.83, "#ff00ff");
    gradient.addColorStop(1, "#ff0000");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  };

  // Handle canvas click
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSaturation = (x / canvas.width) * 100;
    const newBrightness = 100 - (y / canvas.height) * 100;

    setSaturation(newSaturation);
    setBrightness(newBrightness);
  };

  // Handle hue slider click
  const handleHueClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = hueCanvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newHue = (x / canvas.width) * 360;

    setHue(newHue);
  };

  // Update selected color when HSB values change
  useEffect(() => {
    const newColor = hsbToHex(hue, saturation, brightness);
    setSelectedColor(newColor);
  }, [hue, saturation, brightness]);

  // Draw canvases when component mounts or hue changes
  useEffect(() => {
    if (isOpen) {
      drawColorPicker();
      drawHueSlider();
    }
  }, [isOpen]);

  useEffect(() => {
    drawColorPicker(); // only the main canvas depends on hue
  }, [hue]);

  // Handle hex input change
  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.match(/^#[0-9A-Fa-f]{6}$/)) {
      setSelectedColor(value.toUpperCase());
    }
  };

  const handleOk = () => {
    onColorSelect(selectedColor);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-4 w-[308px] shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[18px] font-bold">Add Colours</h2>
          <button onClick={onClose}>
            <X className="w-3 h-3 text-[#667085]" />
          </button>
        </div>

        <div className="mb-4">
          <canvas
            ref={canvasRef}
            width={280}
            height={155}
            className="w-full h-40 rounded-lg cursor-crosshair border"
            onClick={handleCanvasClick}
          />
        </div>

        <div className="mb-4">
          <canvas
            ref={hueCanvasRef}
            width={280}
            height={17}
            className="w-full h-[17px] cursor-pointer rounded-3xl"
            onClick={handleHueClick}
          />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <input
            type="text"
            value={selectedColor}
            onChange={handleHexChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm font-mono"
            placeholder="#FB2424"
          />
          <div
            className="w-10 h-10 rounded border border-gray-300"
            style={{ backgroundColor: selectedColor }}
          />
        </div>

        <button
          onClick={handleOk}
          className="w-full bg-indigo-500 hover:bg-indigo-600 justify-center text-white h-[46px] flex items-center rounded-lg font-medium transition-colors"
        >
          Ok
        </button>
      </div>
    </div>
  );
}
