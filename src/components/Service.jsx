import { useNavigate } from "react-router-dom"
import { ImCancelCircle } from "react-icons/im";

export const Service = () => {
    const navigate=useNavigate()
  return (
    <div>
        <div className="bg-[#5c0f4b] text-[orange] min-h-[100vh] fixed top-0 left-0 bottom-0 right-0
    overflow-x-hidden w-[100vw] flex flex-col justify-start items-center p-4">
      
        <div className=" h-[11vh] text-2xl w-[100%] flex justify-end  items-center ">
        <ImCancelCircle onClick={()=>navigate('/')} className="text-right text-3xl mr-3"/>
        </div >
            <p className="text-justify border border-[orange] rounded-xl p-3">
              At Shopee, we offer a reliable platform for buyers to research and compare products before making a purchase.
              Our service provides detailed product insights, expert reviews, and real customer feedback, helping you make
               well-informed decisions. Whether you’re looking for electronics, fashion, home appliances, or other items,
              we compile unbiased information from multiple sources to give you a clear understanding of product quality, performance, and value.  

              We also provide product comparisons, helping you evaluate features, 
              prices, and user experiences side by side. Our goal is to ensure that you have all the necessary details to 
              choose the best product that suits your needs. While we don’t sell products directly, Shopee serves as your 
              trusted guide, making shopping smarter and easier.
        </p>
        </div>
        
    </div>
  )
}

export default Service;
  

