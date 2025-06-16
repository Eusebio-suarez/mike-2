
import logo from "../../assets/logo.png"
export const Header = () => {
  return (
    <nav className='flex justify-around items-center bg-[#1f172f] w-full text-gray-400 text-sm'>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div className='flex gap-6'>
            <ul className='flex gap-6 items-center'>
                <li><a className='text-white' href="#">About</a></li>
                <li><a className='hover:text-white' href="#">Features</a></li>
                <li><a className='hover:text-white' href="#">Use case</a></li>
                <li><a className='hover:text-white' href="#">Pricing</a></li>
            </ul>
            <button className='text-white py-2 px-4 rounded active:scale-105 hover:scale-[102%] transition-all duration-300 bg-gradient-to-r from-[#8242d4] to-[#1178d3]'>Download</button>
        </div>
    </nav>
  )
}
