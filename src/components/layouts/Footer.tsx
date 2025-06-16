import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"
import facebook from "../../assets/facebook.svg"

export const Footer = () => {
  return (
    <div className="w-full h-[100px] flex items-center content-center justify-evenly ">
      <p>© Website made by Mivfx - contact@adress.com</p>
      <div className="flex flex-row ">
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
      </div>
    </div>
  )
}
