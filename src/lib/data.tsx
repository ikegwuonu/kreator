import {
  AI,
  Brand,
  Content,
  Personas,
  Posts,
  Space,
  Templates,
  Video,
} from "@/components/svg/icons";
import { Category, TemplateCategory, TypographyScale } from "./types";

export const Categories: Category[] = [
  { name: "AI Ghostwriter", icon: <AI width={18} height={18} />, link: "#" },
  { name: "Safe Space", icon: <Space width={18} height={18} />, link: "#" },
  {
    name: "Content Library",
    icon: <Content width={18} height={18} />,
    link: "#",
  },
  {
    name: "Brand Identity Kit",
    icon: <Brand width={18} height={18} />,
    link: "/brand",
  },
  { name: "My Posts", icon: <Posts width={18} height={18} />, link: "#" },
  {
    name: "Template Library",
    icon: <Templates width={18} height={18} />,
    link: "/",
  },
  {
    name: "Video Creation",
    icon: <Video width={18} height={18} />,
    link: "#",
  },
  {
    name: "Build AI Personas",
    icon: <Personas width={18} height={18} />,
    link: "#",
  },
];
export const TemplateCategories: TemplateCategory[] = [
  {
    name: "Linkedin Post",
    image: "/linkedin.jpg",
    overlayImage: "/linkedin2.png",
    isOverlayed: true,
  },
  {
    name: "Instagram Post",
    image: "/instagram.jpg",
    overlayImage: "/instagram2.png",
    isOverlayed: true,
  },
  {
    name: "Newsletter",
    image: "/newsletter.png",
    overlayImage: "/linkedin2.png",
    isOverlayed: false,
  },
];
export const fonts = [
  { label: "Inter", value: "Inter" },
  { label: "Monaco", value: "Monaco" },
];
export const checkboxOptions = [
  { label: "Regular (400)", value: "400" },
  { label: "Medium (500)", value: "500" },
  { label: "Bold (700)", value: "700" },
];
export const typographyScale: TypographyScale[] = [
  { heading: "H1", value: "48px/1.2" },
  { heading: "H2", value: "36px/1.25" },
  { heading: "H3", value: "24px/1.3" },
];
