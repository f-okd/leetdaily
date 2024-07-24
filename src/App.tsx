// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import { ProblemEndpoint } from './ProblemEndpoint';
import { Category } from './Problems';

function App() {
  const [category, setCategory] = useState<Category>(Category.ALL);
  const open150 = async () => {
    const problemUrl = new ProblemEndpoint().getRandomProblem(category);
    chrome.tabs.create({ url: problemUrl });
  };
  const openSourceCode = async () => {
    chrome.tabs.create({ url: 'https://github.com/f-okd/leetdaily' });
  };

  return (
    <>
      <h1>LeetDaily</h1>
      <h2>Neetcode 150</h2>
      <div className="card">
        <section>
          <p>Choose a category:</p>
          <select
            defaultValue={Category.ALL}
            onChange={(e) => setCategory((e.currentTarget.value as Category) ?? Category.ALL)}
          >
            {Object.keys(Category).map((key) => (
              <option value={Category[key as keyof typeof Category]}>
                {key.replace(/_/g, ' ')}
              </option>
            ))}
          </select>
        </section>
        <br />
        <section>
          <button onClick={open150}>Go</button>
        </section>
      </div>
      <a onClick={openSourceCode} className="read-the-docs">
        Source code
      </a>
    </>
  );
}

export default App;
