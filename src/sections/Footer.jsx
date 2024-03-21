import { footerLogo } from "../assets/images/index";
import { socialMedia } from "../constants";

const Footer = () => {
  // mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm
  return (
    <footer className="max-container">
      <div className="grid
        justify-center items-center
      lg:grid-col-4 md:grid-col-2 sm:grid-col-1 max-sm:gap-4  gap-6 ">
        <div className="flex flex-col items-center justify-start gap-3">
          <img src={footerLogo}
            width={150}
            height={46}
            alt="logo" />
          <p className=" mt-3 leading-6 text-base text-white-400">
          Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {
              socialMedia.map((item, index) => {
                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                   <img src={item.src}
                  key={index} alt={item.alt} width={50}
                  className="bg-white rounded-full"
                  height={50} />
                </div>
               
              })
}
          </div>
        </div>  
        
      </div>
    </footer>
  )
}

export default Footer