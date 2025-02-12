import { useNavigate } from "react-router-dom"
import { ImCancelCircle } from "react-icons/im";
const About = () => {
    const navigate=useNavigate()
  return (
    <div>
        <div className="bg-[#5c0f4b] text-[orange] min-h-[100vh] fixed top-0 left-0 bottom-0 right-0
    overflow-x-hidden w-[100vw] flex flex-col justify-start items-center p-4">
      
        <div className=" h-[11vh] text-2xl w-[100%] flex justify-end  items-center ">
        <ImCancelCircle onClick={()=>navigate('/')} className="text-right text-3xl mr-3"/>
        </div >
            <p className="text-justify border border-[orange] rounded-xl p-3">
           Welcome to Shopee, your go-to platform for product research and reviews. We understand that
           making the right purchase decision requires reliable information, which is why we provide detailed
           insights, expert reviews, and real customer feedback on a wide range of products. Whether you&apos;re 
           looking for the latest gadgets, fashion items, or home essentials, Shopee helps you compare features,
           specifications, and user experiences—all in one place. <br/><br/>

           At Shopee, we don’t sell products; we guide you to the best ones. 
           Our platform allows you to explore unbiased reviews, compare similar
           products, and stay updated on the latest market trends. With Shopee, 
           you can research thoroughly before making a purchase from your preferred
           online or offline store, ensuring you get the best value for your money.
        </p>
        </div>
        
    </div>
  )
}

export default About