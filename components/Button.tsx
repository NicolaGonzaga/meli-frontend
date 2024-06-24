"use client";
import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.customButton} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
