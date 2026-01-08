import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import { sectionsData } from "./data";

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />
      <Hero />

      <div
        style={{
          position: "relative",
          zIndex: 50,
          marginTop: "-300px",
          paddingBottom: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {sectionsData.map((item) => (
          <Section
            key={item.id}
            id={item.slug}
            number={item.number}
            subtitle={item.subtitle}
            title={item.title}
            description={item.description}
            image={item.image}
            reversed={item.reversed}
          />
        ))}
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
export default App;
