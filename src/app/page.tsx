import AddNew from "@/components/AddNew";
import { Plus } from "@/components/svg/icons";
import { TemplateCategories } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F7F7F7] py-6 pl-6 pr-3 flex-1">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <p className="text-[18px] font-semibold text-[#101828]">
            Template Library
          </p>
          <AddNew />
        </div>
        {TemplateCategories.map((category) => (
          <div className="pt-10" key={category.name}>
            <div className="flex justify-between items-center">
              <p className="text-[18px] font-semibold text-[#101828]">
                {category.name}
              </p>
              <p className="font-semibold text-[#6A67AF]">View all</p>
            </div>
            <div className="pt-6 flex gap-4 items-center justify-center">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="relative w-1/3 aspect-[320/250]">
                  {/* Background image */}
                  <Image
                    src={category.image}
                    alt="linkedin"
                    className="object-cover rounded-xl"
                    fill
                  />
                  {/* Centered overlay image */}
                  {category.isOverlayed && (
                    <Image
                      src={category.overlayImage}
                      alt="linkedin overlay"
                      className="absolute inset-0 m-auto"
                      width={200}
                      height={200}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
