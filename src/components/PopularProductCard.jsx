
import {star} from "../assets/icons/index"
const PopularProductCard = ({imgURL,name,price}) => {
  return (
      <div className="flex flx-col  cursor-pointer ">
          <div>
              
              <img src={imgURL} alt="" />
              <div className="flex mt-8 justify-start  space-x-3 items-center ">
                  <img src={star} alt="" />
                  <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.1)</p>
              </div>
              <h3 className="mt-2 text-2xl font-semibold ">
                  { name}
              </h3>
              <p className="mt-2 font-semibold font-montserrat text-coral-red">
                  {price}
              </p>
          </div>
    </div>
  )
}

export default PopularProductCard