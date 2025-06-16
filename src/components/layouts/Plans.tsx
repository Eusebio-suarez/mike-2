import hoja from "../../assets/hoja.png"
import maletin from "../../assets/maletin.png"
import nube from "../../assets/nube.png"

import { Plan } from './Plan'
export const Plans = () => {
  return (
    <div className='bg-[#1f172f] flex flex-col items-center text-white p-10 gap-10 text-center'>
        <h2 className='text-5xl font-bold'>Plans & Pricing</h2>
        <p className='max-w-[800px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, corrupti nostrum. Unde fugiat provident autem vel adipisci recusandae reprehenderit saepe? Culpa ipsa blanditiis quia molestias minus sit possimus in quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum repellendus delectus quasi odio accusantium architecto ullam aperiam sunt neque nihil tenetur laboriosam, maxime quod quas necessitatibus.</p>
        <div className='flex gap-7'>
            <Plan titulo='Lite' texto='Free' price='0' textocolor='red' icono={hoja} botoncolor={'red'}></Plan>
            <Plan titulo='Standard' texto='Per month' price='24' textocolor='black' icono={nube} botoncolor={'black'}></Plan>
            <Plan titulo='Ultimate' texto='per user /year' price='400' textocolor='black' icono={maletin} botoncolor={'black'}></Plan>
        </div>
    </div>
  )
}
