import cn from "classnames";
import styles from "./field.module.scss";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Field = ({ children, className, ...rest }: Props) => (
  <input className={cn(styles.root, className)} {...rest}>
    {children}
  </input>
);
