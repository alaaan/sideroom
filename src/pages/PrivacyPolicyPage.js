import React, {useContext,useEffect} from 'react'
import {ThemeContext} from '../context/theme-context';

const PrivacyPolicyPage = () =>{

  const {setHasHeader} = useContext(ThemeContext);

  useEffect(() => {
    setHasHeader(false);
  })


  return (

    <iframe src="https://docs.google.com/gview?url=https://conectrmedia.blob.core.windows.net/files/CONECTR%20Privacy%20Policy.docx&embedded=true" frameborder="0">
    </iframe>

  )

}

export default PrivacyPolicyPage;