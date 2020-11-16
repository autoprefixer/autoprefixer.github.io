import cn from "classnames";
import styles from "./button.module.scss";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Button = ({ children, className, ...rest }: Props) => (
  <button className={cn(styles.root, className)} {...rest}>
    {children}
  </button>
);
