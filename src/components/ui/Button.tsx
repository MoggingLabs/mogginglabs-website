import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-cream hover:bg-accent-deep border border-accent hover:border-accent-deep",
  secondary:
    "bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink hover:text-cream",
  ghost: "bg-transparent text-ink hover:text-accent border border-transparent",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300 cursor-pointer select-none",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return <button className={buttonClasses({ variant, size, className })} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return <a className={buttonClasses({ variant, size, className })} {...props} />;
}
