export interface Category {
  name: string;
  icon: React.ReactNode;
  link: string;
}
export interface TemplateCategory {
  name: string;
  image: string;
  overlayImage: string;
  isOverlayed?: boolean;
}
export interface SelectProps {
  label: string;
  value: string | number;
}
export interface CheckboxGroupProps {
  label: string;
  value: string | number;
}
export interface TypographyScale {
  heading: string;
  value: string;
}
export interface BrandProps {
  setTab: React.Dispatch<React.SetStateAction<boolean>>;
}
