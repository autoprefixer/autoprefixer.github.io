import styles from "./headline.module.scss";

type Props = {
  title: string;
  titleTag?: string;
  kicker?: string;
  subhead?: string;
  logo?: JSX.Element;
};

export const Headline = ({ title, titleTag = "h1", subhead, kicker, logo }: Props) => {
  const TitleTag = `${titleTag}` as keyof JSX.IntrinsicElements;

  return (
    <div className={styles.root}>
      <div className={styles.logo}>{logo}</div>
      <div className={styles.container}>
        {kicker ?? <small className={styles.kicker}>{kicker}</small>}
        <TitleTag className={styles.title}>{title}</TitleTag>
        {subhead ?? <p className={styles.subhead}>{subhead}</p>}
      </div>
    </div>
  );
};
