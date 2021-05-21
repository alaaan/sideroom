import WebService, { JsonPayload } from "./webservice";
import { StringFormat } from "../helpers/functions";
export default class ListingWebService extends WebService {
  routePrefix = "/ondemand";

  partnerProfilePath = `${this.routePrefix}/partner/profile?baseUrl={0}&returnUrl={1}`;
  
  async getPartnerProfile(baseUrl, returnUrl) {
    let result = new JsonPayload();
    try {
      var formattedPath = StringFormat(this.partnerProfilePath, baseUrl, returnUrl);
      result = await this.makeGetRequest(formattedPath);
    } catch (ex) {
      result.Errored = true;
      result.Message = ex.message;
    }
    return result;
  }
}
