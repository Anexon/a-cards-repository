import React from "react"
import { Helmet } from "react-helmet"

function SEO() {
  return (
    <Helmet>
        
      {/* General tags */}
      {/* <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={imageUrl} />
      <link rel="canonical" href={siteUrl} /> */}

      {/* OpenGraph tags */}
      {/* <meta property="og:url" content={siteUrl} />
      <meta property="og:title" name="title" content={title} />
      <meta
        property="og:description"
        name="description"
        content={description}
      />
      <meta property="og:image" name="image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Amaia" /> */}
      {/* We need facebook AppID */}
      {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

      {/* Twitter Card tags */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {/* <meta name="twitter:creator" content={seo.social.twitter} /> */}
      {/* <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} /> */}
    </Helmet>
  )
}

export default SEO