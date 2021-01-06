import WebService, { JsonPayload } from "./webservice";

export default class UserWebService extends WebService {
  routePrefix = "/user";

  loginPath = `${this.routePrefix}/loginweb`;

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
      result = await this.makePostRequest(this.logoutPath);
    } catch (ex) {
      result.Errored = true;
      result.Message = ex.message;
    }
    return result;
  }
}
