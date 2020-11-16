import Head from 'next/head'
import Link from "next/link";
import { Container, Headline } from "../shared/components";
import { isDev } from '../shared/utils';
import { useTrans } from "../shared/utils/i18n";
import { Logo, Converter } from "../src/components";

const IndexPage = (props: any) => {
  const { t } = useTrans();
  const titleIcon = isDev  ? "⚙️ " : undefined;

  return (
    <>
      <Head>
        <title>{titleIcon}{t("home:title")}</title>
        <meta name="description" content={t("home:description")}/>
      </Head>

      <Container size="small">
        <Headline title={t("headline:title")} subhead={t("headline:subhead")} logo={<Logo />} />
      </Container>

      <Converter />

      <Container size="medium">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iusto et delectus quod ut
            accusamus voluptatem, ipsam maiores ipsa saepe rem eveniet eos omnis enim temporibus,
            explicabo provident totam tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iusto et delectus quod ut
            accusamus voluptatem, ipsam maiores ipsa saepe rem eveniet eos omnis enim temporibus,
            explicabo provident totam tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iusto et delectus quod ut
            accusamus voluptatem, ipsam maiores ipsa saepe rem eveniet eos omnis enim temporibus,
            explicabo provident totam tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iusto et delectus quod ut
            accusamus voluptatem, ipsam maiores ipsa saepe rem eveniet eos omnis enim temporibus,
            explicabo provident totam tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iusto et delectus quod ut
            accusamus voluptatem, ipsam maiores ipsa saepe rem eveniet eos omnis enim temporibus,
            explicabo provident totam tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iusto et delectus quod ut
            accusamus voluptatem, ipsam maiores ipsa saepe rem eveniet eos omnis enim temporibus,
            explicabo provident totam tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iusto et delectus quod ut
            accusamus voluptatem, ipsam maiores ipsa saepe rem eveniet eos omnis enim temporibus,
            explicabo provident totam tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iusto et delectus quod ut
            accusamus voluptatem, ipsam maiores ipsa saepe rem eveniet eos omnis enim temporibus,
            explicabo provident totam tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iusto et delectus quod ut
            accusamus voluptatem, ipsam maiores ipsa saepe rem eveniet eos omnis enim temporibus,
            explicabo provident totam tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iusto et delectus quod ut
            accusamus voluptatem, ipsam maiores ipsa saepe rem eveniet eos omnis enim temporibus,
            explicabo provident totam tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iusto et delectus quod ut
            accusamus voluptatem, ipsam maiores ipsa saepe rem eveniet eos omnis enim temporibus,
            explicabo provident totam tenetur?
          </p>
      </Container>
      {/* <h1>{t("test")} Next.js 👋</h1> */}
      <pre>{JSON.stringify(props, undefined, "  ")}</pre>
      <p>
        <Link href="/" locale="en">
          <a>En</a>
        </Link>
        <Link href="/" locale="ru">
          <a>Ru</a>
        </Link>
      </p>
    </>
  );
};

export default IndexPage;
