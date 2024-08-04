import LeetcodeEndpoint from "../leetcode/LeetcodeEndpoint";

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message === "getDailyChallenge") {
    (async () => {
      const leetcodeEndpoint = new LeetcodeEndpoint();
      const res = await leetcodeEndpoint.getDailyChallenge();
      const link = "https://leetcode.com" + res;
      sendResponse(link);
    })();
  }
  return true;
});
