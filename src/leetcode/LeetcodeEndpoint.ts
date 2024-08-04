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

export class LeetcodeEndpoint {
  async getDailyChallenge(): Promise<string | undefined> {
    let link = undefined;
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
      link = data.data.activeDailyCodingChallengeQuestion.link;
      console.log("Daily challenge link:", link);
    } catch (error) {
      console.error("Error fetching daily challenge:", error);
    }
    return link;
  }
}

export default LeetcodeEndpoint;
