import Buttons from "../components/Buttons"

const Subscribe = () => {
  return (
    <section className="max-container  flex justify-between items-center max-lg:flex-col gap-10">
      <h1 className="text-4xl  sm:w-full sm:text-center font-semibold capitalize max-sm:w-full  max-sm:text-center">
          Sign Up for
          <span className='text-coral-red'> Updates </span>& Newsletter
      </h1>
      <div className='flex lg:max-w-[40%] gap-4 w-full rounded-full  p-2  max-sm:flex-col border-2 border-gray-400 max-sm:border-none justify-between items-center '>
        <input type='email' placeholder='subscribe@nike.com' className='  w-3/5 ml-3 max-sm:py-3 py-2 px-3   rounded-full outline-none  text-gray-700 text-xl   sm:border-none  max-sm:w-full  border-2 border-gray-400 
        ' />
        <div>
        <Buttons label='Sign Up' fullWidth />
        </div>
      </div>
       
    
      
    </section>
  )
}

export default Subscribe