import { afterEach, beforeEach, describe, expect, it } from "vitest";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { LeetcodeEndpoint } from "./LeetcodeEndpoint";
import {
  leetCodeGraphQlEndpoint as endpoint,
  dailyChallengeGraphQlQuery as query,
} from "./utils";

describe("LeetcodeEndpoint", () => {
  let mock: MockAdapter;
  let leetcodeEndpoint: LeetcodeEndpoint;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    leetcodeEndpoint = new LeetcodeEndpoint();
  });

  afterEach(() => {
    mock.reset();
  });

  it("should make a POST request to the specified URL with the correct body and return the challenge link", async () => {
    const expectedLink =
      "https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/";
    const mockResponse = {
      data: {
        activeDailyCodingChallengeQuestion: {
          link: expectedLink,
        },
      },
    };

    mock.onPost(endpoint, { query }).reply(200, mockResponse);

    const result = await leetcodeEndpoint.getDailyChallenge();

    expect(mock.history.post[0].url).toBe(endpoint);
    expect(JSON.parse(mock.history.post[0].data)).toEqual({ query });
    expect(result).toBe(expectedLink);
  });
});
