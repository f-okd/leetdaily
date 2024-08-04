import axios from "axios";
import {
  leetCodeGraphQlEndpoint as endpoint,
  dailyChallengeGraphQlQuery as query,
} from "./utils";

export class LeetcodeEndpoint {
  async getDailyChallenge(): Promise<string> {
    const headers = {
      "Content-Type": "application/json",
    };

    let link = "";
    await axios
      .post(endpoint, JSON.stringify({ query }), {
        headers,
      })
      .then((res) => {
        link = res.data.data.activeDailyCodingChallengeQuestion.link;
      })
      .catch((error) => console.log(error));

    return link;
  }
}

export default LeetcodeEndpoint;
