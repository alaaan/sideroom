import axios from 'axios';
import UserService from '../services/user_service';
const queryString = require('querystring');
            
export class JsonPayload {
     Errored = false;
     Message = "";
     Payload;
}

export default class WebService {

  apiUrl = 'https://dudewheresmyapi.conectr.io';

  async makeGetRequest(
      path,
      data,
    ) {
      console.log(path);
      return await this.makeWebCall(path, "GET", data, false);
    }

  async makePostRequest(
      path,
      data,
      isJsonRequest = true,
    ) {
      return await this.makeWebCall(path, "POST", data, isJsonRequest);
    }

  async makeWebCall(
      path,
      requestType,
      data,
      isJsonRequest = true,
    ) {
      
      const fullUrl = `${this.apiUrl}${path}`;
      const request =
        requestType === "GET"
          ? this.buildGetRequest(fullUrl, data)
          : this.buildPostRequest(fullUrl, data, isJsonRequest);
      
      request.headers = UserService.getInstance().isAuthenticated() ? 
      { 
        "Cache-Control": "no-cache",
        "Auth": UserService.getInstance().getAuthCookie()
      } :
      { 
        "Cache-Control": "no-cache",
      } 
      try {
        console.log(`Calling out to ${request.url}`);
        data && console.log(` with data ${JSON.stringify(data)}`);
        const response = await axios.request(request);
        console.log(`Response: ${JSON.stringify(response)}`);
        return response.data;
      } 
      catch (ex)
      {
        console.log(JSON.stringify(ex));
        const payload = new JsonPayload();
        payload.Errored = true;
        payload.Message = ex.message;
        return payload;
      }
    }

  buildGetRequest(fullUrl, data) {
      const url =
        data != null
          ? `${fullUrl}?${queryString.stringify(data)}`
          : `${fullUrl}`;
      const request = {
        method: "GET",
        url,
      };
      return request;
    }

  buildPostRequest(url, data, isJson) {
      const request = {
        method: "POST",
        url,
      };
      
      data != null && (isJson ? (request.data = data) : (request.data = queryString.stringify(data)));
      return request;
    }
}
