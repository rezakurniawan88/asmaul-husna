import React, { useState } from "react";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState(false);

  function changeLanguage() {
    setLang(!lang);
  };



  return (
    <div className="App bg-slate-50 dark:bg-slate-900">
      <Header lang={lang} changeLang={changeLanguage} />
      <CardList lang={lang} />
      <Footer />
    </div>
  )
}

export default App;