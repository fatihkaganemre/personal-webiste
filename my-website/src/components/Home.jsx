import Header from "./Header";
import LinksBar from "./LinksBar";
import Features from "./features/Features";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header />
      <LinksBar />
      <Features />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Home;