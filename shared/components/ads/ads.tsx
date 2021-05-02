import cn from "classnames";
import styles from "./ads.module.scss";

type IType = "leaderboard" | "skyscraper" | "auto";
type IProvider = "yandex" | "google";
type IHorizontalAlignment = "left" | "right" | "center";
type IVerticalAlignment = "top" | "bottom" | "center";
type IProps = {
  className?: string;
  type: IType;
  provider: IProvider;
  horizontal?: IHorizontalAlignment;
  vertical?: IVerticalAlignment;
};

export const Ads = ({ type, className, vertical = "center", horizontal = "center" }: IProps) => {
  return (
    <div
      className={cn(styles.root, className)}
      data-type={type}
      data-valign={vertical}
      data-halign={horizontal}
    ></div>
  );
};
