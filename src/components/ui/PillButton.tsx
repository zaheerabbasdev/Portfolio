import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "solid" | "outline";

type AnchorProps = {
  as?: "a";
  variant?: Variant;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = {
  as: "button";
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center px-6 py-3 font-display text-xs font-bold tracking-[0.2em] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper hover:bg-ink-soft",
  outline: "border border-current text-ink hover:bg-ink hover:text-paper",
};

export function PillButton(props: AnchorProps | ButtonProps) {
  const { variant = "solid", className = "", as, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (as === "button") {
    return (
      <button
        type="button"
        className={classes}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  }

  return (
    <a
      className={classes}
      {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
    />
  );
}
