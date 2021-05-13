import ReactDOM from 'react-dom';
import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import SRButtonOutlined from '../components/SRButtonOutlined'
import UserWebService from '../web_services/user_webservice'

class ImageCropper extends PureComponent {
  state = {
    src: null,
    crop: {
      unit: '%',
      width:50,
      aspect: 1 / 1,
    },
  };

  onSelectFile = e => {
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
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }

  getBlob (canvas){

  }

  async uploadData(formData) {
    const service = new UserWebService(); 
    const result = await service.uploadImg(formData);
    console.log(result);
  }


  async getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    let imageBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));

    // canvas.toBlob(async function(blob) {
    const formData = new FormData();
    // formData.append('image', imageBlob,'profile.jpg');
    formData.append('image', 'test');


    console.log(imageBlob);
    console.log(formData);
    const service = new UserWebService(); 
    const result = await service.uploadImg(formData);
    console.log(result);

  // });
    
 
  }




    

   

  render() {
    const { crop, croppedImageUrl, src } = this.state;

    return (
      <div className="upload" style={{display:'flex',flexDirection:'column'}}>

        

        {src && (
          <div style={{display:'flex',flexDirection:'column'}}>
          <ReactCrop
            style={{maxWidth:'400px'}}
            src={src}
            crop={crop}
            ruleOfThirds
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
          </div>
        )}

        {src? <SRButtonOutlined>Crop</SRButtonOutlined> : (

              
        <label class="upload-wrapper">
          <input type="file" accept="image/*" onChange={this.onSelectFile} />
          <span>Upload Profile Image</span>
        </label>
        )}
        {/* {croppedImageUrl && (
          <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
        )} */}
      </div>
    );
  }
}
export default ImageCropper;

