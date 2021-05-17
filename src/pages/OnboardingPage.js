import React, {useContext,useEffect,useRef,useState} from 'react'
import {ThemeContext} from '../context/theme-context';
import SRTextField from '../components/SRTextField'
import SROutlinedButton from '../components/SRButtonOutlined'
import '../styles/OnboardingPage.css'
import infoIcon from '../img/info-icon.svg'
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import * as yup from 'yup';

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
import Loader from '../components/SRLoaderSlim';



registerPlugin(FilePondPluginFileEncode,FilePondPluginFileValidateType,
  FilePondPluginImageResize,FilePondPluginImageExifOrientation,FilePondPluginImagePreview,
  FilePondPluginImageCrop); 

  // const defaultValidationSchema = yup.object({
  
  //   name: yup
  //     .string('Enter your name')
  //     .required('Name is required!'),
  //   request: yup
  //     .string('Tell us a little bit about your request')
  //     .min(3, 'Tell us a little bit more!')
  //     .required('Please tell us about your request'),
  // });
  

  const onboardingSchema = yup.object({
    profileImg:yup
      .string()
      .required('a profile image required'),
    slug: yup
      .string('enter your slug')
      .required('a listing url is required'),
    name: yup
      .string()
      .required('a name is required'),
    username: yup
      .string()
      .required('a username is required'),
    password: yup
      .string()
      .required('a password is required.') 
      .min(8, 'password must be at least 8 characters.'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'passwords must match'),
    price: yup
      .number()
      .required()
      .min(5,'your price must be at least $5 per call'),
    minutes: yup
      .number()
      .required()
      .min(2,'your calls must be at least 2 minutes'),
    slots: yup
      .number()
      .required()
      .positive(),
    description: yup
      .string()
      .min(5,'you must have a listing description')
      
     });



const OnboardingPage = () =>{



  const {setHasHeader} = useContext(ThemeContext);
  const [showImg,setShowImg] = useState(false);
  const [profileImgFile,setProfileImgFile] = useState(null);
  const [profileUploaded,setProfileUploaded] = useState(false);
  const [isUploading,setIsUploading]=useState(false);

  const [disabled,setDisabled] = useState (true);
  const [accessCode,setAccessCode] = useState('testcode');
  const [slug,setSlug]=useState(null);
  const [username,setUsername] = useState(null);
  const [password,setPassword] = useState(null);
  const [passwordConfirmation,setPasswordConfirmation] = useState(null);
  const [name,setName] = useState(null);
  const [profileImgUrl,setProfileImgUrl] = useState(null); 
  const [price,setPrice] = useState(null);
  const [description,setDescription] = useState(null);
  const [slots,setSlots] = useState(null);
  const [minutes,setMinutes] = useState(null);
  

  const service = new UserWebService(); 

  useEffect(() => {
    setHasHeader(false);
  })

  const submitOnboard = async ()=>{

    //create form data 
    let formData = {
      profileImg:profileImgUrl,
      slug: slug,
      name: name,
      username: username,
      password: password,
      passwordConfirmation: passwordConfirmation,
      price: price,
      minutes: minutes,
      slots: slots,
      description: description
    }

    //validation

    onboardingSchema.validate(formData, { abortEarly: false })
    .then(async function() {

      setIsUploading(true);
      const result = await service.onboard(accessCode,username,password,name,profileImgUrl,price,description,slots,minutes);
      if (!result.Errored) {
        //success
        setIsUploading(false);
      }

      else{
        //error
        setIsUploading(false);
      }


      })
    .catch(function (err) {
        err.inner.forEach(e => {console.log(e.message)});});

    // const isValid = await onboardingSchema.isValid(formData).catch(function (err) {
    //   console.log(err); // => 'ValidationError'
    // });
    // console.log(formData);
    // console.log(isValid);
    


  }

  const checkReady = () =>{
    let formData = {
      profileImg:profileImgUrl,
      slug: slug,
      name: name,
      username: username,
      password: password,
      passwordConfirmation: passwordConfirmation,
      price: price,
      minutes: minutes,
      slots: slots,
      description: description
    }

    onboardingSchema.validate(formData, { abortEarly: false })
    .then(async function() {setDisabled(false)})
    .catch(function (err) {})
    }



  return (
    

    <div className="partner-page-wrapper">
      <div className="onboarding-content">
        <h2 className="gradient">Lets get started.</h2>
        <h3 style={{marginBottom:'20px',marginLeft:'10%',marginRight:'10%',textAlign:'center'}}>The information you complete below will be what publishes to your profile in our marketplace. You can edit this information at any time in the mobile app.</h3>

        <section className="onboarding-section">
          <h3 className='gradient'>Choose your profile image</h3>
          <p>This is what your fans will see on your landing page and when you call.</p>
          <ImageCropper profileSet={(img)=>{setProfileImgUrl(img); checkReady()}} />
        </section>

        <section className="onboarding-section">
          <h3 className='gradient'>Choose your profile URL</h3>
          <p>This is where fans will go to purchase a call</p>
          <div className='slug-wrapper'>
            <h3 style={{display:'inline'}}>connect.fans/</h3>
            <input className='onboard-input slug' type='text' placeholder='michaeljordan' onChange={e => setSlug(e.target.value)} />
          </div>
        </section>

        

  
        <section className="onboarding-section input-wrapper">
        <h3  className='gradient'>Complete the call info</h3>
        <p style={{marginBottom:'20px'}}>Set your pricing and listing info. This can be edited at any time in the mobile app.</p>
          <div className="input-stack">
            <p className='input-label'>Name</p>
            <input className='onboard-input' type='text' placeholder='Michael Jordan' onChange={e => {setName(e.target.value); checkReady()}} />
          </div>

          <div className="input-stack">
            <p className='input-label'>Username</p>
            <input className='onboard-input' type='text' placeholder='username' onChange={e => {setUsername(e.target.value); checkReady()}}  />
          </div>

          <div className="input-stack">
            <p className='input-label'>Password</p>
            <input className='onboard-input' type='password' onChange={e => {setPassword(e.target.value); checkReady()}} />
          </div>
            
          <div className="input-stack">
            <p className='input-label'>Confirm Password</p>
            <input className='onboard-input' type='password' onChange={e => {setPasswordConfirmation(e.target.value); checkReady()}} />
          </div>

          <div className="input-stack">
            <p className='input-label'>Price per call</p>
            <input className='onboard-input' type='text' placeholder='$100' onChange={e => {setPrice(e.target.value); checkReady()}} />
          </div>

          <div className="input-stack">
            <p className='input-label'>Minutes per call</p>
            <input className='onboard-input' type='text' placeholder='2 minutes' onChange={e => {setMinutes(e.target.value); checkReady()}} />
          </div>

          <div className="input-stack">
            <p className='input-label'># of available</p>
            <input className='onboard-input' type='text' placeholder='slots available' onChange={e => {setSlots(e.target.value); checkReady()}} />
          </div>

          <div className="input-stack">
            <p className='input-label'>Describe your public listing</p>
            {/* <img src={infoIcon} alt='info' /> */}
            <textarea className='onboard-input text-area-input' cols="40" rows="5" type='text' placeholder='Im excited to meet you. In your request, tell me what you want to talk about.' onChange={e => {setDescription(e.target.value); checkReady()}} />
          </div>
          
         

        </section>

        <SRButton disabled={disabled} onClick={()=>{submitOnboard()}}>{!isUploading ? ('Create Profile') : <Loader />}</SRButton>



      </div>



    </div>

    
  )

}

export default OnboardingPage;