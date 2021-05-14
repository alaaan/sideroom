import WebService, { JsonPayload } from "./webservice";

export default class UserWebService extends WebService {
  routePrefix = "/user";

  loginPath = `${this.routePrefix}/loginweb`;
  requestCodePath= `${this.routePrefix}/requestlogincode`;
  imgUploadPath= `${this.routePrefix}/upload/image`;

  onDemandPrefix= '/ondemand';
  onboardPath = `${this.onDemandPrefix}/onboard`;



  async uploadImg(image) {
    console.log(image);
    const formData = new FormData();
    formData.append(
        "Image",
        image,
      );
    let result = new JsonPayload();
    try {
      // const data = {
      //   Image: image};
      result = await this.makePostRequest(this.imgUploadPath, formData);
    } catch (ex) {
      result.Errored = true;
      result.Message = ex.message;
    }
    return result;
  }

  async uploadFormImage(formData) {
  
    let result = new JsonPayload();
    try {
      // const data = {
      //   Image: image};
      result = await this.makePostRequest(this.imgUploadPath, formData);
    } catch (ex) {
      result.Errored = true;
      result.Message = ex.message;
    }
    return result;
  }




  async login(username, password) {
    let result = new JsonPayload();
    try {
      const data = {
        Username: username,
        Password: password,
      };
      result = await this.makePostRequest(this.loginPath, data);
    } catch (ex) {
      result.Errored = true;
      result.Message = ex.message;
    }
    return result;
  }

  async logout() {
    let result = new JsonPayload();
    try {
      result = await this.makePostRequest(this.requestCodePath);
    } catch (ex) {
      result.Errored = true;
      result.Message = ex.message;
    }
    return result;
  }

  async requestLoginCode(username) {
    let result = new JsonPayload();
    try {
        const data = {
            Username: username
        };
        result = await this.makePostRequest(this.requestCodePath, data);
    } catch (ex) {
        result.Errored = true;
        result.Message = ex.message;
    }
    return result;
  }

  async onboard(accessCode,username,password,name,imageUrl,listingPrice,listingDescription,maxSlots,time) {
    
    let result = new JsonPayload();
    try {
        const data = {
            AccessCode:accessCode,
            Username:username, 
            Password:password,
            Name:name,
            ImageUrl:imageUrl,
            ListingPrice:listingPrice, 
            ListingDescription:listingDescription,
            MaxSlots:maxSlots, 
            Time:time
        };
        result = await this.makePostRequest(this.onboardPath, data);
    } catch (ex) {
        result.Errored = true;
        result.Message = ex.message;
    }
    return result;
  }
  

}


