import LeetCode from "leetcode-query";

console.log("hey");
chrome.runtime.onMessage.addListener(async (message, _sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  if (message === "getDailyChallenge") {
    const res = getDailyChallenge();
    sendResponse(res);
  }
});

async function getDailyChallenge() {
  const lc = new LeetCode();
  return (await lc.daily()).link;
}
