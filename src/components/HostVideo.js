import React,{useState} from 'react'
import ReactPlayer from 'react-player';
import play from '../img/play.svg'; 
import pause from '../img/pause.svg'; 
import gradientBorder from '../img/gradient-border.svg'




const HostVideo = ({url,loaded})=>{

  const [playing,setPlaying]= useState(false);

  return(

  <div className='host-video' style={{position:'relative',transform: 'translate3d(0, 0, 0)'}}>
    {/* <img style={{zIndex:'2', position:'absolute', width:'98%',top:'1%',left:'1%'}} src={gradientBorder} alt='background' /> */}

    <img src={playing ? pause : play } style={{zIndex:'999',position:'absolute',bottom:'10%',left:'10%'}} alt='unmute' onClick={()=>{setPlaying(!playing)}}/>
    <img style={{zIndex:'2', position:'absolute'}} src={gradientBorder} alt='background' />

    <ReactPlayer width='auto' height='100%' playsinline playing={playing} onReady={loaded} url={url} style={{zIndex:'1',position:'relative',overflow:'hidden'}} />
  </div> 
  )

  
}

export default HostVideo; 