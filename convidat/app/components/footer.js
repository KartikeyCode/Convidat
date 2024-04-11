import IconTwitter from "../icons/twtitter"
import IconInstagram from "../icons/instagram"
export default function Footer(){
    return(
        <div className="h-24 px-10 flex justify-between items-center bg-black font-Inter text-[#F66E1A] ">
                <h1 className="text-xl"> Convidat © 2024 </h1>
                <div className="icons flex gap-10 items-center">
                    <a href="https://www.twitter.com" target="_blank">  <IconTwitter className="text-[#F66E1A] hover:scale-125 transition-all" width="33px" height="33px" /> </a>
                    <a href="https://www.Instagram.com" target="_blank">  <IconInstagram className="text-[#F66E1A] hover:scale-125 transition-all" width="33px" height="33px" /></a>
                </div>
        </div>
    )
}