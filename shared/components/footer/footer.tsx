import classNames from "classnames";
import styles from "./footer.module.scss";

type IProps = { className?: string };

export const Footer = ({ className }: IProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      2017 — 2020 © Autoprefixer online * github icon * autoprefixer icon * postcss icon Made with
      ❤️ by ymatuhin tags....
    </div>
  );
};
