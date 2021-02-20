import React from "react";
import "styles/global.scss";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarCustom
        bg="light"
        variant="light"
        expand="md"
        logo="/Assets/Other/smallLogo.jpg"
      />

      <Component {...pageProps} />

      <Footer
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        description="Calgary's professional home renovation specialists"
        copyright="© 2020 Altered Space Inc."
        logo="/Assets/Other/smallLogo.jpg"
      />
    </>
  );
}

export default MyApp;
