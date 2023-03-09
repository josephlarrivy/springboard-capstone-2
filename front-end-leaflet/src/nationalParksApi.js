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
      const resp = await axios({ method, url, headers })
      return (resp)
    } catch (err) {
      console.error(err);
    }
  }

  static async getAllParks(limit='50') {
    const resp = await this.makeRequest(`/parks?limit=${limit}`)
    const list = resp.data.data
    // console.log(list)

    const parksArray = []
    for (let park of list) {
      // parksArray.push({
      //   'name' : park.fullName,
      //   'parkCode': park.parkCode,
      //   'location' : {
      //     'lat' : park.latitude,
      //     'lon' : park.longitude,
      //     'address' : park.addresses[0]
      //   },
      //   'image' : park.images[0].url
      // })
      parksArray.push(park)

    }
    return parksArray
  }


}

export default NParksServiceRequest;