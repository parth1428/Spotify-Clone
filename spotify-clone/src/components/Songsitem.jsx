import React, { useContext } from "react"
import { Playercontext } from "../context/Playercontext"
const Songsitem=({name,image,desc,id})=>{
    const {playwithId}=useContext(Playercontext)
    return (
        <div onClick={()=>playwithId(id)} className='min-w-[180px] p-2 ox-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded' src={image} alt="" />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc}</p>

        </div>
    )
    
    
}
export default Songsitem