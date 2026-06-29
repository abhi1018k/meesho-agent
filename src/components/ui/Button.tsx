import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg" | "icon";

const base =
  "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition duration-200 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white shadow-lift hover:-translate-y-0.5 hover:bg-brand-700",
  secondary: "border border-slate-200 bg-white text-ink shadow-sm hover:-translate-y-0.5 hover:border-brand-100 hover:text-brand-700",
  ghost: "text-slate-700 hover:bg-slate-100 hover:text-ink",
  dark: "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-slate-800",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-11 w-11 p-0",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  ),
);
Button.displayName = "Button";

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
};

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <a ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  ),
);
ButtonLink.displayName = "ButtonLink";
