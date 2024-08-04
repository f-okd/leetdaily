import LeetCode from "leetcode-query";

console.log("hey");
chrome.runtime.onMessage.addListener(async (message, _sender, sendResponse) => {
  if (message === "getDailyChallenge") {
    const res = await getDailyChallenge();
    sendResponse(res);
  }
});

async function getDailyChallenge() {
  const lc = new LeetCode();
  return (await lc.daily()).link;
}
