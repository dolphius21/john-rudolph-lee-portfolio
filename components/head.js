import Head from 'next/head';

const HeadComp = () => {
  return (
    <Head>
      <title>John Rudolph Lee</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content="https://www.johnrudol.ph/" />
      <meta
        property="og:title"
        content="John Rudolph Lee | Front-End Web Developer & Digital Designer"
      />
      <meta property="og:type" content="personal website" />
      <meta
        property="og:description"
        content="Hi, I'm John Rudolph Lee. A front-end web developer/digital designer My 8 years of experience as a Graphic Designer has afforded me a well-rounded skillset, including concept design, project management and communication abilities. I am also knowledgeable in technologies like: HTML, CSS, Javascript, MERN(MongoDB, Express.JS, React.JS, Node.JS)."
      />
      <meta property="og:image" content="/website-thumbnail.jpg" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComp;
