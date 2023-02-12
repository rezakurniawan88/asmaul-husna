import React from 'react'
import { data } from '../utils/data.js';

function CardList({lang}) {
  return (
    <div className="w-full flex justify-center">
        <div className="w-[90%] my-4 md:my-8 py-4 flex flex-wrap gap-8 justify-center">
            {data.map((item, i) => (
                <div className="relative w-[45%] sm:w-1/6 bg-white dark:bg-slate-800 flex flex-col items-center rounded-lg ring-1 ring-slate-900/5 shadow-lg text-center cursor-pointer hover:scale-110" key={i}>
                    <div className="absolute top-0 left-0 mt-2 ml-2 flex justify-center items-center w-6 h-6 text-[0.7rem] font-semibold text-slate-900 dark:text-white">{i + 1 + "."}</div>
                    <h1 className="text-2xl md:text-3xl pt-14 pb-10 text-slate-900 dark:text-white">{item.arabic}</h1>
                    <h1 className="text-sm md:text-base font-semibold text-slate-900 dark:text-white">{item.latin}</h1>
                    <h1 className="text-xs md:text-sm text-slate-500 dark:text-slate-400 pt-1 pb-8 px-4">{lang ? item.eng : item.id}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CardList