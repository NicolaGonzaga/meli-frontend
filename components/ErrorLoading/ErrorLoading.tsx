import React from "react";
import styles from "./ErrorLoading.module.css";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <div className={styles.error}>Erro: {message}</div>;
};

export default Error;
