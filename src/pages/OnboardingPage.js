import React, {useContext,useEffect,useRef,useState} from 'react'
import {ThemeContext} from '../context/theme-context';
import SRTextField from '../components/SRTextField'
import SROutlinedButton from '../components/SRButtonOutlined'
import '../styles/OnboardingPage.css'
import infoIcon from '../img/info-icon.svg'
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import UserWebService from '../web_services/user_webservice';

import ImageUploader from '../components/ImageUploader'
import SRLoader from '../components/SRLoader';
import useImageLoader from '../hooks/useImageLoad';
import SRButton from '../components/SRButton';
import ImageCropper from '../components/ImageCropper';



registerPlugin(FilePondPluginFileEncode,FilePondPluginFileValidateType,
  FilePondPluginImageResize,FilePondPluginImageExifOrientation,FilePondPluginImagePreview,
  FilePondPluginImageCrop); 




const OnboardingPage = () =>{

  const {setHasHeader} = useContext(ThemeContext);
  const [showImg,setShowImg] = useState(false);
  const [profileImgFile,setProfileImgFile] = useState(null);
  const [profileUploaded,setProfileUploaded] = useState(false);
  const [isUploading,setIsUploading]=useState(false);

  const [accessCode,setAccessCode] = useState('testcode');
  const [username,setUsername] = useState(null);
  const [password,setPassword] = useState(null);
  const [passwordCheck,setPasswordCheck] = useState(null);
  const [name,setName] = useState(null);
  const [profileImgUrl,setProfileImgUrl] = useState(''); 
  const [listingPrice,setListingPrice] = useState(null);
  const [listingDescription,setListingDescription] = useState(null);
  const [maxSlots,setMaxSlots] = useState(null);
  const [time,setTime] = useState(null);
  

  const imgLoaded = useImageLoader(profileImgUrl);


  const service = new UserWebService(); 

  useEffect(() => {
    setHasHeader(false);
  })

  const submitOnboard = async ()=>{

    const result = await service.onboard(accessCode,username,password,name,profileImgUrl,listingPrice,listingDescription,maxSlots,time);
    
    if (!result.Errored) {
    
      //success

    }

    else{
      //error

    }


  }

  const handleInit = ()=> {
    console.log('FilePond instance has initialised');
}

  const handleFileChange = (e)=>{
      // console.log(e.target.files[0]); 
      // setProfileImgFile(e.target.files[0]);
      // handleUpload(e);
    
    };


  const handleUpload = async (e)=>{

    // const formData = new FormData();
    // // Update the formData object
    // formData.append(
    //   "image",
    //   e.target.files[0],
    // );
  
    // Details of the uploaded file
    console.log(e.target.files[0]);
  
    // Request made to the backend api

    const result = await service.uploadImg(e.target.files[0]);
    setIsUploading(true);
    setShowImg(true);

    if (!result.Errored) {
      setProfileImgUrl(result.Payload.imageUrl); 
      setIsUploading(false);
      setProfileUploaded(true);
      //success

    }

    else{
      //error

    }


    }


  return (
    

    <div className="partner-page-wrapper">
      <div className="onboarding-content">
        <h2 className="gradient">Lets get started.</h2>
        <h3 style={{marginBottom:'20px',marginLeft:'10%',marginRight:'10%',textAlign:'center'}}>Please fill out the informaiton below. The information here will be what publishes to your profile in our marketplace. You can edit this information at any time in the mobile app.</h3>

        <ImageCropper />
        
        {/* {showImg && (imgLoaded? <img className="profile-img" src={profileImgUrl} alt="profile-img" /> : <SRLoader />)} 
        <label class="upload-wrapper">
          <input type="file" name="file" onChange={handleUpload} />
          {!profileUploaded? <span>Upload Profile Image</span> : <span>Change Profile Image</span>}
        </label>  */}

        
        <div className="large-border-box input-wrapper">
          <div className="input-stack">
            <p className='input-label'>Name</p>
            <input className='onboard-input' type='text' placeholder='Michael Jordan' onChange={e => setName(e.target.value)} />
          </div>

          <div className="input-stack">
            <p className='input-label'>Username</p>
            <input className='onboard-input' type='text' placeholder='username' onChange={e => setUsername(e.target.value)}  />
          </div>

          <div className="input-stack">
            <p className='input-label'>Password</p>
            <input className='onboard-input' type='password' onChange={e => setPassword(e.target.value)} />
          </div>
            
          <div className="input-stack">
            <p className='input-label'>Confirm Password</p>
            <input className='onboard-input' type='password' onChange={e => setPasswordCheck(e.target.value)} />
          </div>

          <div className="input-stack">
            <p className='input-label'>Price per call</p>
            <input className='onboard-input-small' type='text' placeholder='$100' onChange={e => setListingPrice(e.target.value)} />
          </div>

          <div className="input-stack">
            <p className='input-label'>Minutes per call</p>
            <input className='onboard-input-small' type='text' placeholder='2 minutes' onChange={e => setTime(e.target.value)} />
          </div>

          <div className="input-stack">
            <p className='input-label'># of available</p>
            <input className='onboard-input-small' type='text' placeholder='slots available' onChange={e => setMaxSlots(e.target.value)} />
          </div>

          <div className="input-stack">
            <p className='input-label'>Describe your public listing</p>
            {/* <img src={infoIcon} alt='info' /> */}
            <textarea className='onboard-input text-area-input' cols="40" rows="5" type='text' placeholder='Im excited to meet you. In your request, tell me what you want to talk about.' onChange={e => setListingDescription(e.target.value)} />
          </div>

        </div>

        <SRButton onClick={()=>{submitOnboard()}}>Submit</SRButton>





      </div>



    </div>

    
  )

}

export default OnboardingPage;