import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <SocialLinks />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
