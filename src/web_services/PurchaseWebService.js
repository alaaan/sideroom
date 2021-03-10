import WebService, { JsonPayload } from "./webservice";

export default class PurchaseWebService extends WebService {
  routePrefix = "/ondemand";
  purchasePath = `${this.routePrefix}/purchase`;

  //  ondemand/listing/hostId

  async makePurchase(listingId,notes,forMe,toPhoneNumber,paymentMethodId,suggestedDate) {
    let result = new JsonPayload();
    try {
        const data = {
          ListingId:listingId,
          Notes:notes, 
          ForMe:forMe, 
          ToPhoneNumber:toPhoneNumber, 
          PaymentMethodId:paymentMethodId,
          SuggestedDate:suggestedDate
        };
        result = await this.makePostRequest(this.purchasePath, data);
    } catch (ex) {
        result.Errored = true;
        result.Message = ex.message;
    }
    console.log(`result from purchase service is ${JSON.stringify(result)}`)
    return result;
  }

 
}
