import React, { useEffect, useRef } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import Displayalbum from "./Displayalbum"

import { useContext } from "react"
import { Playercontext } from "../context/Playercontext"
const Display = () => {
    const {albumsData}=useContext(Playercontext);

    const displayref= useRef();
    const location=useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum? location.pathname.split('/').pop():"";
    const bgColor = isAlbum && albumsData.length > 0 ? albumsData.find((x)=>(x._id==albumId)).bgColour:"#121212";
    useEffect(()=>{
        if(isAlbum){
            displayref.current.style.background=`linear-gradient(${bgColor},#121212)`
        }
        else {
            displayref.current.style.background=`#121212`
        }

    })

    
    return (
        <div ref={displayref} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
            {albumsData.length>0
                ?
                    <Routes>
                    <Route path='/' element={<DisplayHome/>}/>
                    <Route path='/album/:id' element={<Displayalbum album={albumsData.find((x)=>(x._id == albumId))}/>}></Route>
                </Routes>
                : null

            }
           
        </div>
    )
}
export default Display