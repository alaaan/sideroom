import WebService, { JsonPayload } from "./webservice";
import { StringFormat } from "../services/functions";
export default class AdminWebService extends WebService {
  routePrefix = "/admin";

  eventsPath = `${this.routePrefix}/events`;
  eventDetailsPath = `${this.routePrefix}/event/details?eventId={0}`;

  async GetEvents(username, password) {
    let result = new JsonPayload();
    try {
      result = await this.makeGetRequest(this.eventsPath);
    } catch (ex) {
      result.Errored = true;
      result.Message = ex.message;
    }
    return result;
  }

  async GetEventDetails(eventId) {
    let result = new JsonPayload();
    try {
      var formattedPath = StringFormat(this.eventDetailsPath, eventId);
      result = await this.makeGetRequest(formattedPath);
    } catch (ex) {
      result.Errored = true;
      result.Message = ex.message;
    }
    return result;
  }
}
