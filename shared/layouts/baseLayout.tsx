import { Ads, Footer, Container } from "../components";
import styles from "./baseLayout.module.scss";

type IProps = { children: React.ReactNode };

export const BaseLayout = ({ children }: IProps) => {
  return (
    <div className={styles.root}>
      <Container className={styles.content} size="large">
        <Ads type="leaderboard" provider="google"></Ads>

        {children}

        <Ads
          className={styles.adsLeft}
          type="skyscraper"
          provider="google"
          horizontal="right"
        ></Ads>
        <Ads
          className={styles.adsRight}
          type="skyscraper"
          provider="yandex"
          horizontal="left"
        ></Ads>
      </Container>
      <Container className={styles.footer} size="large">
        <Footer />
      </Container>
    </div>
  );
};
