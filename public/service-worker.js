import LeetcodeQueryEndpoint from "./leetcode-query/LeetcodeQueryEndpoint";

// EXPORTING TO AVOID COMMIT ERRORS:
export const openDaily = async () => {
  const url = await new LeetcodeQueryEndpoint().getDailyChallenge();
  chrome.tabs.create({ url });
};
