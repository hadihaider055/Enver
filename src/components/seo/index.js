import React from "react";
import Helmet from "react-helmet";
import Logo from "../../images/favicon.png";

function SEO({ seo }) {
  const { title, description } = seo;
  return (
    <Helmet>
      <link rel="icon" href={Logo} type="image/icon type" />
      <meta name="msapplication-TileColor" content="#3d5e67" />
      <meta name="theme-color" content="#ffffff" />
      {/* Primary Meta Tags */}
      <title>{`Enver - ${title}`}</title>
      <meta name="title" content={`Enver - ${title}`} />
      <meta name="description" content={description} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://we-enver.netlify.app/" />
      <meta property="og:title" content={`Enver - ${title}`} />
      <meta property="og:description" content={description} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://we-enver.netlify.app/" />
      <meta property="twitter:title" content="Enver" />
      <meta property="twitter:description" content={description} />
      <html lang="en" />
      <link rel="canonical" href="https://we-enver.netlify.app/" />
    </Helmet>
  );
}

export default SEO;
