// interface IProblem {
//   title: string;
//   questionUrl: string;
//   solutionUrl: string;
// }

export enum Category {
  ALL = "all",
  ARRAYS = "arrays",
  STACKS = "stacks",
  BINARY_SEARCH = "binarySearch",
  SLIDING_WINDOW = "slidingWindow",
  TREES = "trees",
  TRIES = "tries",
  BACKTRACKING = "backtracking",
  HEAP_PRIORITYQ = "heap",
  GRAPHS = "graphs",
  ONE_D_DP = "oneDDP",
  INTERVALS = "intervals",
  GREEDY = "greedy",
  ADVANCED_GRAPHS = "advancedGraphs",
  TWO_D_DP = "twoDDP",
  BIT_MANIPULATION = "bitManipulation",
  MATH_GEOMETRY = "mathGeometry",
}

export const arrayProblems: string[] = [
  "https://leetcode.com/problems/contains-duplicate/",
  "https://leetcode.com/problems/valid-anagram/",
  "https://leetcode.com/problems/two-sum/description/",
  "https://leetcode.com/problems/group-anagrams/",
  "https://leetcode.com/problems/top-k-frequent-elements/",
  "https://leetcode.com/problems/product-of-array-except-self/",
  "https://leetcode.com/problems/valid-sudoku/description/",
  "https://leetcode.com/problems/longest-consecutive-sequence/",
];
export const twoPointerProblems: string[] = [
  "https://leetcode.com/problems/valid-palindrome/description/",
  "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
  "https://leetcode.com/problems/3sum/",
  "https://leetcode.com/problems/container-with-most-water/",
  "https://leetcode.com/problems/trapping-rain-water/",
];
export const stackProblems: string[] = [
  "https://leetcode.com/problems/valid-parentheses/",
  "https://leetcode.com/problems/min-stack/",
  "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
  "https://leetcode.com/problems/generate-parentheses/",
  "https://leetcode.com/problems/daily-temperatures/",
  "https://leetcode.com/problems/car-fleet/",
  "https://leetcode.com/problems/largest-rectangle-in-histogram/",
];
export const binarySearchProblems: string[] = [
  "https://leetcode.com/problems/binary-search/",
  "https://leetcode.com/problems/search-a-2d-matrix/",
  "https://leetcode.com/problems/koko-eating-bananas/",
  "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
  "https://leetcode.com/problems/search-in-rotated-sorted-array/",
  "https://leetcode.com/problems/time-based-key-value-store/",
  "https://leetcode.com/problems/median-of-two-sorted-arrays/",
];
export const slidingWindowProblems: string[] = [
  "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
  "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
  "https://leetcode.com/problems/longest-repeating-character-replacement/",
  "https://leetcode.com/problems/permutation-in-string/",
  "https://leetcode.com/problems/minimum-window-substring/",
  "https://leetcode.com/problems/sliding-window-maximum/",
];
export const linkedListProblems: string[] = [
  "https://leetcode.com/problems/reverse-linked-list/",
  "https://leetcode.com/problems/merge-two-sorted-lists/",
  "https://leetcode.com/problems/reorder-list/",
  "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
  "https://leetcode.com/problems/copy-list-with-random-pointer/",
  "https://leetcode.com/problems/add-two-numbers/",
  "https://leetcode.com/problems/linked-list-cycle/",
  "https://leetcode.com/problems/find-the-duplicate-number/",
  "https://leetcode.com/problems/lru-cache/",
  "https://leetcode.com/problems/merge-k-sorted-lists/",
  "https://leetcode.com/problems/reverse-nodes-in-k-group/",
];
export const treeProblems: string[] = [
  "https://leetcode.com/problems/invert-binary-tree/",
  "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
  "https://leetcode.com/problems/diameter-of-binary-tree/",
  "https://leetcode.com/problems/balanced-binary-tree/",
  "https://leetcode.com/problems/same-tree/",
  "https://leetcode.com/problems/subtree-of-another-tree/",
  "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
  "https://leetcode.com/problems/binary-tree-level-order-traversal/",
  "https://leetcode.com/problems/binary-tree-right-side-view/",
  "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
  "https://leetcode.com/problems/validate-binary-search-tree/",
  "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
  "https://leetcode.com/problems/export construct-binary-tree-from-preorder-and-inorder-traversal/",
  "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
  "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
];
export const triesProblems: string[] = [
  "https://leetcode.com/problems/implement-trie-prefix-tree/",
  "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
  "https://leetcode.com/problems/word-search-ii/",
];
export const backTrackingProblems: string[] = [
  "https://leetcode.com/problems/subsets/",
  "https://leetcode.com/problems/combination-sum/",
  "https://leetcode.com/problems/permutations/",
  "https://leetcode.com/problems/subsets-ii/",
  "https://leetcode.com/problems/combination-sum-ii/",
  "https://leetcode.com/problems/word-search/",
  "https://leetcode.com/problems/palindrome-partitioning/",
  "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
  "https://leetcode.com/problems/n-queens/",
];
export const heapPriorityQueueProblems: string[] = [
  "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
  "https://leetcode.com/problems/last-stone-weight/",
  "https://leetcode.com/problems/k-closest-points-to-origin/",
  "https://leetcode.com/problems/kth-largest-element-in-an-array/",
  "https://leetcode.com/problems/task-scheduler/",
  "https://leetcode.com/problems/design-twitter/",
  "https://leetcode.com/problems/find-median-from-data-stream/",
];
export const graphProblems: string[] = [
  "https://leetcode.com/problems/number-of-islands/",
  "https://leetcode.com/problems/max-area-of-island/",
  "https://leetcode.com/problems/clone-graph/",
  "https://leetcode.com/problems/walls-and-gates/",
  "https://leetcode.com/problems/rotting-oranges/",
  "https://leetcode.com/problems/pacific-atlantic-water-flow/",
  "https://leetcode.com/problems/surrounded-regions/",
  "https://leetcode.com/problems/course-schedule/",
  "https://leetcode.com/problems/course-schedule-ii/",
  "https://leetcode.com/problems/graph-valid-tree/",
  "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
  "https://leetcode.com/problems/redundant-connection/",
  "https://leetcode.com/problems/word-ladder/",
];
export const oneDimensionalDynamicProgrammingProblems: string[] = [
  "https://leetcode.com/problems/climbing-stairs/",
  "https://leetcode.com/problems/min-cost-climbing-stairs/",
  "https://leetcode.com/problems/house-robber/",
  "https://leetcode.com/problems/house-robber-ii/",
  "https://leetcode.com/problems/longest-palindromic-substring/",
  "https://leetcode.com/problems/palindromic-substrings/",
  "https://leetcode.com/problems/decode-ways/",
  "https://leetcode.com/problems/coin-change/",
  "https://leetcode.com/problems/maximum-product-subarray/",
  "https://leetcode.com/problems/word-break/",
  "https://leetcode.com/problems/longest-increasing-subsequence/",
  "https://leetcode.com/problems/partition-equal-subset-sum/",
];
export const intervalProblems: string[] = [
  "https://leetcode.com/problems/insert-interval/",
  "https://leetcode.com/problems/merge-intervals/",
  "https://leetcode.com/problems/non-overlapping-intervals/",
  "https://leetcode.com/problems/meeting-rooms/",
  "https://leetcode.com/problems/meeting-rooms-ii/",
  "https://leetcode.com/problems/minimum-interval-to-include-each-query/",
];
export const greedyProblems: string[] = [
  "https://leetcode.com/problems/maximum-subarray/",
  "https://leetcode.com/problems/jump-game/",
  "https://leetcode.com/problems/jump-game-ii/",
  "https://leetcode.com/problems/gas-station/",
  "https://leetcode.com/problems/hand-of-straights/",
  "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",
  "https://leetcode.com/problems/partition-labels/",
  "https://leetcode.com/problems/valid-parenthesis-string/",
];
export const advancedGraphProblems: string[] = [
  "https://leetcode.com/problems/reconstruct-itinerary/",
  "https://leetcode.com/problems/min-cost-to-connect-all-points/",
  "https://leetcode.com/problems/network-delay-time/",
  "https://leetcode.com/problems/swim-in-rising-water/",
  "https://leetcode.com/problems/alien-dictionary/",
  "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
];
export const twoDimensionalDynamicProgrammingProblems: string[] = [
  "https://leetcode.com/problems/unique-paths/",
  "https://leetcode.com/problems/longest-common-subsequence/",
  "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
  "https://leetcode.com/problems/coin-change-ii/",
  "https://leetcode.com/problems/target-sum/",
  "https://leetcode.com/problems/interleaving-string/",
  "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
  "https://leetcode.com/problems/distinct-subsequences/",
  "https://leetcode.com/problems/edit-distance/",
  "https://leetcode.com/problems/burst-balloons/",
  "https://leetcode.com/problems/regular-expression-matching/",
];
export const bitManipulationProblems: string[] = [
  "https://leetcode.com/problems/single-number/",
  "https://leetcode.com/problems/number-of-1-bits/",
  "https://leetcode.com/problems/counting-bits/",
  "https://leetcode.com/problems/reverse-bits/",
  "https://leetcode.com/problems/missing-number/",
  "https://leetcode.com/problems/sum-of-two-integers/",
  "https://leetcode.com/problems/reverse-integer/",
];
export const mathGeometryProblems: string[] = [
  "https://leetcode.com/problems/rotate-image/",
  "https://leetcode.com/problems/spiral-matrix/",
  "https://leetcode.com/problems/set-matrix-zeroes/",
  "https://leetcode.com/problems/happy-number/",
  "https://leetcode.com/problems/plus-one/",
  "https://leetcode.com/problems/powx-n/",
  "https://leetcode.com/problems/multiply-strings/",
  "https://leetcode.com/problems/detect-squares/",
];

export const problems = {
  arrays: arrayProblems,
  twoPointers: twoPointerProblems,
  stacks: stackProblems,
  binarySearch: binarySearchProblems,
  slidingWindow: slidingWindowProblems,
  linkedList: linkedListProblems,
  trees: treeProblems,
  tries: triesProblems,
  backtracking: backTrackingProblems,
  heap_priorityq: heapPriorityQueueProblems,
  graphs: graphProblems,
  oneDDP: oneDimensionalDynamicProgrammingProblems,
  intervals: intervalProblems,
  greedy: greedyProblems,
  advancedGraphs: advancedGraphProblems,
  twoDDP: twoDimensionalDynamicProgrammingProblems,
  bitManipulation: bitManipulationProblems,
  mathGeometry: mathGeometryProblems,
};

export default problems;
