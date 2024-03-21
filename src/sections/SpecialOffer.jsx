import Buttons from "../components/Buttons"
import { arrowRight } from "../assets/icons/index"
import { offer } from "../assets/images";
const SpecialOffer = () => {
  return (
    <section className="max-container container">
     
      <div className="flex justify-between items-center max-lg:flex-col-reverse gap-10
      ">
        <div className="
        mx-auto  flex items-center
      
        ">
          <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain'
        />
        </div>
        <div>
        <div className="text-4xl capitalize tracking-wide  leading-normal w-full mb-5 font-bold"><span className="text-coral-red">special</span> offer </div>
          <p className="text-base text-slate-gray leading-normal ">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart. 
        </p>
          <p className="mt-8 text-base text-slate-gray leading-normal ">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart. </p>
          <div className="flex gap-4 mt-6 max-sm:flex-col">
          <Buttons label={"Shop now"} iconUrl={arrowRight} />
          <Buttons label={"learn more"}
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray' />
        </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer