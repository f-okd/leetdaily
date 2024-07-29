import LeetCode from "leetcode-query";

export class LeetcodeQueryEndpoint {
  private lc: LeetCode;

  constructor() {
    this.lc = new LeetCode();
  }
  async getDailyChallenge(): Promise<string> {
    const dailyChallenge = await this.lc.daily();
    return dailyChallenge.link;
  }
}

export default LeetcodeQueryEndpoint;
