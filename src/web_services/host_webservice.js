import WebService, { JsonPayload } from "./webservice";

export default class HostWebService extends WebService {
  routePrefix = "/ondemand";
  purchasePath = `${this.routePrefix}/listing/`;

  //  ondemand/listing/hostId

  async getHostListing(host) {
    let result = new JsonPayload();
    try {
      result = await this.makeGetRequest(this.purchasePath+host);
    } catch (ex) {
      result.Errored = true;
      result.Message = ex.message;
    }
    return result;
  }


 
}
