import cn from "classnames";
import styles from "./container.module.scss";

type IContainerSize = "small" | "medium" | "large";
type IProps = {
  className?: string;
  size: IContainerSize;
  children: React.ReactNode;
};

export const Container = ({ size, className, children }: IProps) => {
  return <div className={cn(styles.root, className, styles[`size-${size}`])}>{children}</div>;
};
