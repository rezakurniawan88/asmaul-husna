import React, { useState } from "react";

function Header({lang, changeLang}) {
  const [dark, setDark] = useState(true);

  function switchTheme() {
    setDark(!dark);
    if(dark === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="h-44 md:h-52">
      <div className="flex gap-3 justify-end py-4 pr-5">
          <button onClick={changeLang} className="flex gap-2 p-2 text-xs md:text-sm rounded-lg text-white border border-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" /></svg>
              {lang ? "ID" : "EN"}
          </button>
          <button onClick={switchTheme} className="p-2 rounded-lg text-white border border-slate-400">
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-4"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
            )}
          </button>
      </div>
      <div className="text-white pt-2">
        <h1 className="text-center text-2xl font-bold md:text-4xl">99 Asmaul Husna</h1>
        <p className="text-center mt-2 font-medium text-sm md:text-base">{lang ? "( The good names of Allah SWT )" : "( Nama-nama baik Allah SWT )"}</p>
      </div>
      <button onClick={scrollToTop} id="scroll-btn" className="fixed bottom-0 right-0 mr-6 mb-6 bg-slate-900 p-4 rounded-full z-30 dark:bg-slate-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white dark:text-slate-800"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
      </button>
    </header>
  )
}

export default Header