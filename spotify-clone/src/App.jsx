import React, { useContext } from 'react' 
import Sidebar from './components/sidebar';
import Player from  './components/player';
import Display from './components/Display';
import { Playercontext } from './context/Playercontext';


const App=()=> {
  const {audioRef,track,songsData}=useContext(Playercontext);


  return (

    <div className='h-screen bg-black'>
      {
        songsData.lenght   !==0
          ? <>
            <div className='h-[90%] flex'>
              <Sidebar/>
              <Display/>
            </div>
            <Player/>
          
          </>
          : null
      }


      <audio ref={audioRef} src={track? track.file:""} preload='auto'></audio>
    </div>
  )
}

export default App