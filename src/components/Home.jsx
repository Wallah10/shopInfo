import { SiShopee } from "react-icons/si";
import {useState,useEffect} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";

function Home() {
    const override= {
        display: "block",
        margin: "0 auto",
        borderColor: "#5c0f4b",
      };
    const [loading,setLoading]=useState(true)
    const [search,setSearch]=useState('')
    const [Products,setProducts]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
          function fetchdata() {
              setLoading(true)
              axios.get(`https://dummyjson.com/products/search?q=${search}`) 
                   .then((res)=>{
                    console.log(res)
                    setProducts(res.data.products)
                   }).catch(err=>{setProducts([])
                                  console.log(err)
                                 
                   }).finally(()=>setLoading(false))
           }
           fetchdata()
    },[search])
  return (
    <div className="min-h-screen overflow-x-hidden w-[100vw] bg-[orange] flex flex-col justify-start items-center">
        <div className="flex flex-col justify-center items-center bg-[#5c0f4b] text-[orange]
        fixed left-0 right-0 top-0 z-20 p-2 h-[12vh]">
            <h1 className="text-2xl font-bold flex"><SiShopee />SHOPEE TRENDS</h1>
            <p><i>Browser of latest products</i></p>
            <input 
           className=" p-1 text-[#5c0f4b] outline-none border-[#5c0f4b] rounded "
           placeholder="search"
           type="text"
           value={search}
           onChange={(e)=>setSearch(e.target.value)}></input>

        </div>

        <div className="mt-[12.3vh] text-center border-[#5c0f4b] m-2 ">
           <div className="text-[#5c0f4b]  m-3">
            {loading? <BounceLoader
                       color='#5c0f4b'
                       loading={loading}
                       cssOverride={override}
                       size={150}
                       aria-label="Loading Spinner"
                       data-testid="loader"
                       />:
                Products.map(product=>{
                 return <div key={product.id} className="border border-[#5c0f4b] rounded
                      grid grid-cols-1 sm:grid-cols-2 gap-4  bg-white md:m-32 md:grid md:grid-col-4">
                      <img src={product.images} alt={product.title}></img>
                      <div className="bg-[orange] justify-center items-center flex flex-col text-justify p-2 w-[100]
                      rounded">
                      <p className="font-bold underline font-sans">{product.title}</p>
                      <p>{`${product.description.slice(0,100)}...`}</p>
                      <button
                      onClick={()=>navigate(`/${product.id}`)}
                      className="rounded hover:bg-[#eeeeee] font-bold border bg-[#ffffff]
                      pl-4 pr-4 pt-1 pb-1 ">view</button>
                      </div>
                      
                    </div>
                })
            }
           </div>
        </div>
    </div>
  )
}

export default Home