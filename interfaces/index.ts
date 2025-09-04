export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface CardProps {
  title: string;
  location: string;
  image: string;
  price: string;
}

