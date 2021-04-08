import React, {useContext,useEffect} from 'react'
import {ThemeContext} from '../context/theme-context';

const TOSPage = () =>{

  const {setHasHeader} = useContext(ThemeContext);

  useEffect(() => {
    setHasHeader(false);
  })



  return (

    <iframe src="https://docs.google.com/gview?url=https://conectrmedia.blob.core.windows.net/files/Mobile%20Application%20Terms%20of%20Use%20(Users%20Version)%20-%20Connectr_12748341.docx&embedded=true" frameborder="0">
    </iframe>
   
  )

}

export default TOSPage;