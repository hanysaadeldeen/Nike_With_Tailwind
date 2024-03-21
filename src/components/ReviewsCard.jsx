import {star} from "../assets/icons/index"

const ReviewsCard = ({imgUrl,name,rate,desc}) => {
    return (
        <div className="  text-center mt-16 px-2 py-10 rounded-md flex flex-col items-center justify-center shadow-3xl">
            <img src={imgUrl} width={70}
            className="rounded-full"
                height={70} alt="" />
            <p className="info-text w-full mt-6">{desc}</p>
            <div className="flex gap-2 items-center justify-center">
            <img src={star} alt="" />
            <p className="info-text">({rate })</p>
            </div>
            <h2 className="font-bold text-lg mt-4">{name}</h2>
      </div>
  )
}

export default ReviewsCard