import { useNavigate } from "react-router-dom"
import { ImCancelCircle } from "react-icons/im";



function Comment() {
    const navigate=useNavigate()
  return (
    <div>
        <div className="bg-[#5c0f4b] text-[orange] min-h-[100vh] fixed top-0 left-0 bottom-0 right-0
    overflow-x-hidden w-[100vw] flex flex-col justify-start items-center p-4">
      
        <div className=" h-[11vh] text-2xl w-[100%] flex justify-end  items-center ">
        <ImCancelCircle onClick={()=>navigate('/')} className="text-right text-3xl mr-3"/>
        </div >
            <p className="text-justify border border-[orange] rounded-xl p-3">
              We’d love to hear from you! At SHOPEE, we are committed to helping you make informed purchasing decisions 
              by providing accurate and reliable product insights. Whether you have questions, feedback, or suggestions, our
               team is here to assist you. Your input helps us improve our platform and deliver the best experience for all 
             users.  

              For inquiries, partnerships, or support, feel free to reach out to us via email or our contact form. We strive to respond 
              as quickly as possible to ensure you get the assistance you need. Stay connected with us through our social media channels
               for the latest updates, product insights, and more!
        </p>
        </div>
        
    </div>
  )
}

export default Comment
