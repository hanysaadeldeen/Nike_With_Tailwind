import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProdct = () => {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="flex flex-col  justify-start center items-start  w-full">
        <h3 className="text-4xl font-semibold mb-6   ">Our  <span className='text-coral-red inline-block mt-3'>Popular</span> Product</h3>
        <p  className="lg:w-1/2  mt-2  font-montserrat text-slate-gray ">  Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value</p>
      </div>
      <div
        className="mt-16 grid 
      
        lg:grid-cols-4 md:grid-cols-3  justify-center sm:grid-cols-2 sm:gap-6 gap-14"
      >
        {
          products.map((item, index) => {
            return (
              <PopularProductCard key={index} imgURL={item.imgURL}
              price={item.price} name={item.name}
              />
            )
          })
        }
      </div>   
    </section>
  )
}

export default PopularProdct