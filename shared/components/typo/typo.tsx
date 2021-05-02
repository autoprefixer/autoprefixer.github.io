import cn from "classnames";
import styles from "./typo.module.scss";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Typo = ({ children, className, ...rest }: Props) => (
  <div className={cn(styles.root, className)} {...rest}>
    {children}
  </div>
);
