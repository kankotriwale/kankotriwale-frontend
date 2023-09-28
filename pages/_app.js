import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/kankotri.css";           /*  Page - 1*/
import "../styles/Kankotri-p2.scss";       /* Page - 2 */
import "../styles/kankotri-p3.scss";       /* Page - 3 */
import "../styles/kankotri-p4.scss";       /* Page - 4 */
import '../styles/contact-us.scss';       /* Contact Us Page*/

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
