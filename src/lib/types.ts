export interface Category {
  name: string;
  icon: React.ReactNode;
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
