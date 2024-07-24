import problems, { Category } from './Problems';

export class ProblemEndpoint {
  problems = problems;
  listOfAllProblems: string[] = [];
  constructor() {
    Object.values(problems).forEach((problemList) => {
      this.listOfAllProblems = this.listOfAllProblems.concat(problemList);
    });
  }

  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomProblem(category: Category) {
    if (category === Category.ALL) {
      return this.listOfAllProblems[this.getRndInteger(0, 150)];
    }
    let p: string[] = [];
    Object.entries(this.problems).map(([cat, probs]) => {
      if (cat === category) {
        p = probs;
      }
    });

    return p[this.getRndInteger(0, p.length)];
  }
}
