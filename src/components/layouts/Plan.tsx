
type PlanProps ={
    titulo:string;
    icono:string;
    texto:string;
    price:string;
    textocolor:string;
    botoncolor:string;
}

export const Plan = (props: PlanProps) => {
    const{titulo, icono, texto, price, textocolor, botoncolor}=props;
  return (
    <div className='bg-white w-[300px] py-4 flex flex-col items-center gap-6'>
        <div>
            <img src={icono} alt="" />
            <h2 className="text-xl font-bold" style={{color: textocolor}}>{titulo}</h2>
        </div>
        <div className="bg-[#f5f5f5] flex items-center justify-center w-full">
            <p className="text-4xl p-4 text-black flex items-center justify-center">${price}<span className="text-lg text-gray-500">{ texto }</span></p>
        </div>
        <div>
           <ul>
                <li className="flex font-semibold items-center gap-8">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill={textocolor}  className="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
                    <p className="text-gray-600 text-lg">Full Components</p>
                </li>
                <li  className="flex font-semibold items-center gap-8">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke={textocolor}  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
                    <p className="text-gray-600 text-lg">Future Updates</p>
                </li>
                <li  className="flex font-semibold items-center gap-8">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke={textocolor}  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
                    <p className="text-gray-600 text-lg">Documentacion</p>
                </li>
                <li  className="flex font-semibold items-center gap-8">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke={textocolor}  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
                    <p className="text-gray-600 text-lg">Costumer Support</p>
                </li>
                <li  className="flex font-semibold items-center gap-8">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    <p className="text-gray-600 text-lg">Cool Option</p>
                </li>
           </ul>
        </div>
        <div className="text-gray-600 font-semibold max-w-[70%] text-center">
            <p>Rem, ea nihil! Doloribus eaque quae deleniti quos. exercitationem fuga inventore.</p>
        </div>
        <button className="py-2 px-4 text-white" style={{background:botoncolor}}>Subcribe Now</button>
    </div>
  )
}
