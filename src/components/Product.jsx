import { useParams,useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react'
import axios from "axios";
import { ImCancelCircle } from "react-icons/im";
function Product() {
    const [product,setProduct]=useState({})
    const {id}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        function fetchdata() {
            axios.get(`https://dummyjson.com/products/${id}`) 
                 .then((res)=>{
                  console.log(res)
                  setProduct(res.data)
                 })
         }
         fetchdata()
  },[id])
  return (
    <div className="bg-[#5c0f4b] text-[orange] min-h-[100vh] fixed top-0 left-0 bottom-0 right-0
    overflow-x-hidden w-[100vw] flex flex-col justify-start items-center p-4">
      
        <div className=" h-[11vh] text-2xl w-[100%] flex justify-end  items-center ">
        <ImCancelCircle onClick={()=>navigate('/')} className="text-right text-3xl mr-3"/>
        </div>
        <div className="bg-white flex flex-col justify-evenly items-center w-[100%] m-3 border border-[#5c0f4b]
         rounded text-[#5c0f4b] md:m-40">
             <img src={product.images} alt={product.title} className="h-[30vh]"></img>
             <div className="justify-center items-center flex flex-col text-justify p-2 w-[100]
             rounded">
             <p className="font-bold underline font-sans">{product.title}</p>
             <p><span className="font-bold">Brand : </span>{product.brand}</p>
             <p>{product.description} {product.shippingInformation}</p>
             <p className="border border-[#ffffff] p-2"><span className="font-bold text-[#5c0f4b] text-xl">Price: </span>
                <span className="text-[red] bg-[white]">{`$ ${product.price}`}</span></p>            
             
             <button
             onClick={()=>navigate(`/`)}
             className="rounded hover:bg-[#eeeeee] font-bold border bg-[#ffffff]
             pl-4 pr-4 pt-1 pb-1 text-[#5c0f4b] border-[#5c0f4b]">visit shop</button>

        </div>
        </div>
      
    </div>
  )
}

export default Product
