import ButtonSvg from "../assets/svg/ButtonSvg";
import React from "react";

interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  px?: string;
  white?: boolean;
}

export function Button({ className, href, onClick, children, px, white }: ButtonProps) {
  const classes = `button relative items-center justify-center h-11 transition-colors hover:text-theme-1 ${px || "px-7"
    } ${white ? "text-hue-8" : "text-hue-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </a>
  );

  return href ? renderLink() : renderButton();
};
