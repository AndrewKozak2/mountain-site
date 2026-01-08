import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

import img1 from "./assets/01.png";
import img2 from "./assets/02.png";
import img3 from "./assets/03.png";

import num1 from "./assets/icon/01number.svg";
import num2 from "./assets/icon/02number.svg";
import num3 from "./assets/icon/03number.svg";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div
        style={{
          position: "relative",
          zIndex: 50,
          marginTop: "-400px",
          paddingBottom: "200px",
          display: "flex",
          flexDirection: "column",
          gap: "75px",
        }}
      >
        <Section
          number="01"
          numberIcon={num1}
          subtitle="Get Started"
          title="What level of hiker are you?"
          description="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
          image={img1}
          isReversed={false}
        />

        <Section
          number="02"
          numberIcon={num2}
          subtitle="Hiking Essentials"
          title="Picking the right Hiking Gear!"
          description="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe if they get sweaty or wet."
          image={img2}
          isReversed={true}
        />

        <Section
          number="03"
          numberIcon={num3}
          subtitle="Where you go is the key"
          title="Understand Your Map & Timing"
          description="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction."
          image={img3}
          isReversed={false}
        />
      </div>
    </div>
  );
}
export default App;
