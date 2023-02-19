import axios from "axios";
import { control } from "leaflet";
const jwt_decode = require("jwt-decode");

const BASE_URL = "http://localhost:3001";

class BackendApiRequest {


  static async makeRequest(method, endpoint, token, data={}) {
    try {
      const headers = { authorization : `Bearer ${token}` }
      const resp = await axios({
        method,
        url: `${BASE_URL}/${endpoint}`,
        data,
        headers
      });
      console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }



  static async registerNewUser(formData) {
    console.log(formData)

  }

}

export default BackendApiRequest;