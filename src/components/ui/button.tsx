import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import styles from "./primitives.module.css";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.buttonPrimary,
  secondary: styles.buttonSecondary,
};

export function Button({
  className,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = className
    ? `${styles.button} ${variantClass[variant]} ${className}`
    : `${styles.button} ${variantClass[variant]}`;

  return <button className={classes} type={type} {...props} />;
}

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const classes = className
    ? `${styles.buttonLink} ${variantClass[variant]} ${className}`
    : `${styles.buttonLink} ${variantClass[variant]}`;

  return <a className={classes} {...props} />;
}
