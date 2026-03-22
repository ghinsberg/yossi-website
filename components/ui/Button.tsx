import Link from "next/link";

interface ButtonProps {
  variant?: "gold" | "teal" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantStyles = {
  gold: "bg-brand-gold text-black font-semibold hover:bg-brand-gold-light",
  teal: "bg-brand-teal text-white font-semibold hover:bg-brand-teal-light",
  outline:
    "border border-brand-gold text-brand-gold font-semibold hover:bg-brand-gold hover:text-black",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const baseStyles =
  "rounded-full transition-all duration-300 inline-flex items-center justify-center";

export default function Button({
  variant = "gold",
  size = "md",
  href,
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
