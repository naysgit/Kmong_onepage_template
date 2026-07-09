import React from 'react';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Statistics from "./components/Statistics/Statistics";
import Feature from "./components/Feature/Feature";
import Service from "./components/Service/Service";
import Process from "./components/Process/Process";
import Gallery from "./components/Gallery/Gallery";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <Feature />
      <Service />
      <Process />
      <Gallery />
      <Review />
      <Footer />
    </>
  );
}

export default App;