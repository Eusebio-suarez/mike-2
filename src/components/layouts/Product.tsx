import hojas from "../../assets/hojasFondo.jpg"
import telefono from "../../assets/phone.png"

export const Product = () => {
  return (
    <div className="flex items-center h-[400px] bg-[#2e2550] justify-between relative">
      <div className="text-white flex flex-col gap-9 ml-[23%]">
        <h2 className="text-5xl font-bold max-w-[300px]">Product page</h2>
        <p className="max-w-[360px]">
          We built this template to help you create modern and beautiful marketing page.
        </p>
        <div className="flex border-2 border-[#504771] w-[71%] rounded py-1.5 px-1 gap-1 text-sm justify-around items-center">
          <button className="py-2 px-3 border-2 active:scale-105 hover:scale-[102%] transition duration-200 rounded border-white bg-white text-red-300">
            Download it now
          </button>
          <button className="py-2 px-6 border-2 active:scale-105 hover:scale-[102%] transition duration-200 rounded border-white text-white">
            Features
          </button>
        </div>
      </div>
      <div className="w-[50%] h-full relative overflow-hidden">
        <img
          src={hojas}
          alt="Fondo hojas"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover opacity-60"
        />
        <div className="absolute mr-[50%] inset-0 flex justify-center items-center z-10">
          <img src={telefono} alt="Teléfono" className="h-[80%]" />
        </div>
      </div>
    </div>
  );
};
