import React from "react";
import Helmet from "react-helmet";

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <div>404</div>
  </div>
);

export default NotFoundPage;
