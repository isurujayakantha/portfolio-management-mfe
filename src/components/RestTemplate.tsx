import axios from "axios";

class RestTemplate {
  public async get(url:string) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
}

export default new RestTemplate();
