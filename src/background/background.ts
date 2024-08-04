const endpoint = "https://leetcode.com/graphql/";

const query = `
query questionOfToday {
  activeDailyCodingChallengeQuestion {
    date
    userStatus
    link
    question {
      acRate
      difficulty
      freqBar
      frontendQuestionId: questionFrontendId
      isFavor
      paidOnly: isPaidOnly
      status
      title
      titleSlug
      hasVideoSolution
      hasSolution
      topicTags {
        name
        id
        slug
      }
    }
  }
}
`;

async function fetchDailyChallenge() {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const link = data.data.activeDailyCodingChallengeQuestion.link;
    console.log("Daily challenge link:", link);
    return link;
  } catch (error) {
    console.error("Error fetching daily challenge:", error);
  }
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message === "getDailyChallenge") {
    (async () => {
      const res = await fetchDailyChallenge();
      const link = "https://leetcode.com" + res;
      console.log(link);
      sendResponse(link);
    })();
  }
  return true;
});
