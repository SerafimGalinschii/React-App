import styles from "./button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={[styles.btn, styles["btn-" + color]].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
