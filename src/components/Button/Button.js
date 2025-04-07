"use client";

import React from "react";

// Import styles
import styles from "./Button.module.css";

// Import dependencies
import { clsx } from "clsx";
import Link from "next/link";

export const Button = ({
  href,
  color,
  disabled,
  handleClick,
  children,
  customClasses,
  ...props
}) => {
  const classes = clsx(
    styles.button,
    {
      // Colors
      [styles.buttonBlack]: color === "black",
      [styles.buttonWhite]: color === "white",
      // Disabled
      [styles.buttonDisabled]: disabled,
    },
    // Custom classes
    customClasses
  );

  if (href) {
    return (
      <Link href={disabled ? "#" : href} {...props}>
        <a
          onClick={disabled ? undefined : handleClick}
          className={classes}
          aria-disabled={disabled}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
  size: "lg",
  href: undefined,
  disabled: false,
  customClasses: undefined,
  handleClick: undefined,
  children: undefined,
};