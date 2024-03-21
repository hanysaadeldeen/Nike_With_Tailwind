import Buttons from "../components/Buttons"
import {shoe8} from "../assets/images/index"

const SuberQuality = () => {
  return (
    <section className="flex items-center justify-between max-lg:flex-col gap-10 w-full container   max-container">
      <div className="flex flex-col pag-3">
        <h2 className="text-4xl font-bold ">
        We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style,Ensuring premium
        </p>
        <div className="mt-10">
        <Buttons label={"View details"} />
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <img src={shoe8} alt='product detail'
          width={570}
          height={22}
          className='object-contain' />
      </div>
    </section>
  )
}

export default SuberQuality