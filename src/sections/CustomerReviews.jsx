import ReviewsCard from "../components/ReviewsCard"
import { reviews } from "../constants/index"

const CustomerReviews = () => {
  return (
    <section className="mt-4">

      <div >
        <h1 className="text-4xl font-semibold capitalize  max-sm:text-center">what our <span className="text-coral-red">customers </span>say?</h1>
        <p className="mt-2 info-text max-sm:text-center w-3/5">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  items-center justify-center sm:grid-cols-1 gap-5 space-x-5 ">
        {
          reviews.map((item, index) => {
            return (
              <ReviewsCard
                imgUrl={item.imgURL} name={item.customerName}
                rate={item.rating} desc={item.feedback} 
                key={index} />
            )
          })
        }
      </div>
      
      
    </section>
  )
}

export default CustomerReviews