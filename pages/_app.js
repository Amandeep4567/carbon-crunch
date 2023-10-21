import "../styles/globals.css";
import { StateContextProvider } from "../Context/index";
export default function App({ Component, pageProps }) {
  return (
    <>
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>

      <script src="assets/js/jquery-1.12.4.min.js" defer></script>
      <script src="assets/bootstrap/js/bootstrap.min.js" defer></script>
      <script src="assets/owlcarousel/js/owl.carousel.min.js" defer></script>
      <script src="assets/js/magnific-popup.min.js" defer></script>
      <script src="assets/js/waypoints.min.js" defer></script>
      <script src="assets/js/parallax.js" defer></script>
      <script src="assets/js/jquery.countdown.min.js" defer></script>
      <script src="assets/js/particles.min.js" defer></script>
      <script src="assets/js/jquery.dd.min.js" defer></script>
      <script src="assets/js/jquery.counterup.min.js" defer></script>
      <script src="assets/js/spop.min.js" defer></script>
      <script src="assets/js/notification.js" defer></script>
      <script src="assets/js/scripts.js" defer></script>
      <script src="index.js" defer></script>
    </>
  );
}
