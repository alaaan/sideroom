import React,{useState} from 'react';

const useImageLoader = (img) =>{
  const [isLoaded,setIsLoaded] = useState(false);
  const loadedImg = new Image();

  const loadImage =(img)=> {
    return new Promise((resolve, reject) => {
      loadedImg.src = img
      loadedImg.onload = () => setIsLoaded(true)
      loadedImg.onerror = err => reject(err)
    })
  }

    loadImage(img);
    // .then(setIsLoaded(true))


  return isLoaded; 

}

export default useImageLoader; 