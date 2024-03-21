import { services } from "../constants/index"

const Services = () => {
  return (
    <section 
     >   
      <div className="text-4xl capitalize tracking-wide  leading-normal w-full mb-5 font-bold"> our <span className="text-coral-red">services</span>   </div>
      <div  className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 sm:gap-6 gap-14">{
        services.map((item, index) => {
          return (
            <div className="rounded-md px-4 py-5
            shadow-3xl flex flex-col justify-center max-md:items-center w-full" key={index}>
              <h2 className="font-bold text-lg">{item.label}</h2>
              <p className="text-slate-gray leading-normal text-base  mt-3">{ item.subtext}</p> 
            </div>
          )
        })
        }
      </div>
     
    </section>
  )
}

export default Services