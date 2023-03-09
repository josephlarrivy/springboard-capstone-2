import axios from "axios";

import { parks_api_key } from "./keys";
// X-Api-Key

const PARKS_BASE_URL = "https://developer.nps.gov/api/v1";

class NParksServiceRequest {

  static async makeRequest(endpoint) {
    try {
      const headers = { "X-Api-Key": parks_api_key };
      const method = 'get'
      const url = `${PARKS_BASE_URL}${endpoint}`
      const resp = await axios({method, url, headers })
      console.log(url)
      return (resp)
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  static async test() {
    const resp = await this.makeRequest('/parks?limit=10')
    console.log(resp)
    return resp
  }


}

export default NParksServiceRequest;