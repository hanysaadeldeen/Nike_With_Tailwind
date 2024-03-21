
const ShoeCard = ({imgUrl,changeBigShoeImage,bigShoeImg}) => {
    const handleClick = () => {
        if (bigShoeImg !== imgUrl.bigShoe) {
            changeBigShoeImage(imgUrl.bigShoe)
        } 
    }
  return (
    <div className="flex space-x-7 ">
          <div className={`flex justify-center items-center bg-card  bg-cover max-sm:p-4  border-2 cursor-pointer ${bigShoeImg ===imgUrl.bigShoe?`border-coral-red`:`border-transparent`}  rounded-xl sm:w-40 sm:h-40 my-5`} 
              onClick={handleClick}
          >
      <img src={imgUrl.thumbnail} className="object-contain" alt="shoese" width={127} height={103} />
</div>
</div>
  )
}

export default ShoeCard