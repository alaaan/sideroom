import ReactDOM from 'react-dom';
import React, { PureComponent,useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import SRButtonOutlined from '../components/SRButtonOutlined'
import UserWebService from '../web_services/user_webservice'
import SRLoaderAlternate from './SRLoaderAlternate';

class ImageCropper extends PureComponent {
  state = {
    croppedLoaded:false, 
    showCropped:false,
    isUploading:false,
    src: null,
    crop: {
      unit: '%',
      width:50,
      aspect: 1 / 1,
    },
    croppedImageUrl:''
  };

  onSelectFile = e => {
    this.setState({showCropped:false})
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop
      );
      // this.setState({isUploading:false})
      this.setState({ croppedImageUrl });
      this.props.profileSet(croppedImageUrl);
      this.setState({showCropped:true});
      this.setState({src:null});
    }
  }


  async getCroppedImg(image, crop) {
    console.log('get croopped image hit')
    this.setState({isUploading:true})
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    var originWidth = crop.width * scaleX;
    var originHeight = crop.height * scaleY;

        // maximum width/height
        var maxWidth = 1200, maxHeight = 1200 / (16 / 9);
        var targetWidth = originWidth,
          targetHeight = originHeight;
        if (originWidth > maxWidth || originHeight > maxHeight) {
          if (originWidth / originHeight > maxWidth / maxHeight) {
            targetWidth = maxWidth;
            targetHeight = Math.round(maxWidth * (originHeight / originWidth));
          } else {
            targetHeight = maxHeight;
            targetWidth = Math.round(maxHeight * (originWidth / originHeight));
          }
        }
        // set canvas size
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext("2d");


    // canvas.width = crop.width;
    // canvas.height = crop.height;
    // const ctx = canvas.getContext('2d');
    

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width*scaleX,
      crop.height*scaleY,
    );

    let imageBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    const formData = new FormData();
    formData.append('image', imageBlob,'profile.png');
    const service = new UserWebService(); 
    const result = await service.uploadFormImage(formData);
    return (result.Payload.imageUrl);
 
  }


  render() {
    const { isUploading, showCropped,crop, croppedImageUrl, src } = this.state;

    return (
      <div className="upload" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>


        {showCropped && <img style={{marginTop:'10px', display:isUploading? 'none' : ''}} className='cropped-img' onLoad={()=>{this.setState({isUploading:false})}} src={croppedImageUrl} alt="cropped" />}

        {src && !showCropped && !isUploading && (
          <div style={{display:'flex',flexDirection:'column'}}>
          <ReactCrop
            style={{maxWidth:'400px'}}
            src={src}
            crop={crop}
            ruleOfThirds
            onImageLoaded={this.onImageLoaded}
            onComplete={()=>{}}
            onChange={this.onCropChange}
          />
          </div>
        )}

        {src && !isUploading &&
        <SRButtonOutlined
          onClick={()=>{this.onCropComplete(crop)}}>
          Upload</SRButtonOutlined> }
          
        {!src && !isUploading &&
        <label class="upload-wrapper">
          <input type="file" accept="image/*" onChange={this.onSelectFile} />
          <span>Upload New Profile Image</span>
        </label>}
       

        {isUploading && <SRLoaderAlternate label='uploading'/>}


        
   
      </div>
    );
  }
}
export default ImageCropper;

