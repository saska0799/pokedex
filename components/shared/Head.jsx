import Head from "next/head";

const HeadComponent = ({ title, desc, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default HeadComponent;
