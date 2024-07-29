// import { useState } from 'react';
import { useState } from "react";
import "./styles/App.css";
import { ProblemEndpoint } from "./problems/ProblemEndpoint";
import CategorySelect from "./components/category/CategorySelect";
import Button from "./components/button/Button";
import Link from "./components/link/Link";
import { Category } from "./problems/__data__/Problems";

function App() {
  const [category, setCategory] = useState<Category>(Category.ALL);

  const open150 = async () => {
    const problemUrl = new ProblemEndpoint().getRandomProblem(category);
    chrome.tabs.create({ url: problemUrl });
  };
  const openSourceCode = async () => {
    chrome.tabs.create({ url: "https://github.com/f-okd/leetdaily" });
  };

  return (
    <>
      <h1 data-testid={"title"}>LeetDaily</h1>
      <h2 data-testid={"subheading"}>Neetcode 150</h2>
      <div className="card">
        <CategorySelect onChange={setCategory} />
        <br />
        <Button onClick={open150}>Go</Button>
      </div>
      <Link onClick={openSourceCode}>Source code</Link>
    </>
  );
}

export default App;
