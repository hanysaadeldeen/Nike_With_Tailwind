
import Buttons from "../components/Buttons"
import { arrowRight } from "../assets/icons/index"
import {statistics} from "../constants/index"
import { bigShoe2 } from "../assets/images/index"
import ShoeCard from "../components/ShoeCard"
import {shoes} from "../constants/index"
import { useState } from "react"
const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe2)
  return (
    <section className="w-full  
    flex justify-center flex-col  items-center min-h-screen
    xl:flex-row gap-10 max-container" id="home">
      <div className="relative xl:w-2/5 flex 
      flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className=' relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes 
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Buttons label='Shop now' iconUrl={arrowRight} />
        <div className="flex justify-start items-center flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => {
            return (
              <div key={index}>
                <p className='font-palanquin text-4xl  font-bold'>{stat.value}</p>
                <p className='leading-7 text-2xl font-montserrat text-slate-gray'>
                  {stat.label}
                </p>
              </div>
            ) 
            })
          }
        </div>
        
      </div>
      <div className="relative 
      flex flex-1 justify-center
      flex-col
      gap-8
      bg-primary bg-center bg-cover bg-hero xl:min-h-screen  items-center ">
        <img src={bigShoeImg} className="object-contain xl:py-11 relative z-10" width={610} height={500} alt="" />
        <div className="flex space-x-7 ">
          {
            shoes.map((shoes, index) => {
              return (
                <ShoeCard key={index} imgUrl={shoes}
                  changeBigShoeImage={
                    (shoes) => {
                      setBigShoeImg(shoes)}
                }  
                bigShoeImg={bigShoeImg}
                />
              )
            })
          }

        </div>
      </div>
      </section>
  )
}

export default Hero