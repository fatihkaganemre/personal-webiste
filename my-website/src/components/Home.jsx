import Header from "./Header";
import LinksBar from "./LinksBar";
import Features from "./features/Features";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Contact from "../pages/Contact";

function Home() {
  return (
    <div>
      <Header />
      <LinksBar />
      <Features />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;