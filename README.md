# LeetDaily

The Neetcode 150 is a popular road map for technical interview preparation questions to work through. After completing the roadmap, it may be helpful to reinforce the learning with repetition. This chrome extension randomly selects a question from a specified category (or all categories by default).

## How to Run

Follow these steps to clone and run the project on your local machine:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/f-okd/leetdaily
   ```

2. Navigate to the project directory:

   ```bash
   cd C:\...\leetdaily
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Build the app:
   ```bash
   npm run build
   ```
5. Load the extension:
   - Navigate to `chrome://extensions/`
   - Click `load unpacked`
   - Drag `./dist` folder into the box
   - You should be able to see the extension in your extensions tab

Every time you make a change to the code, make sure you rebuild locally then click reload extension on the extensions dashboard.

## How to Test

Ensure the project functions as expected by following these steps:

1. Follow steps (1-3) from [above](#how-to-run)
2. Run tests:

   ```bash
    npm run test
   ```

   Alternatively, one can generate coverage reports using:

   ```bash
   npm run test -- --coverage
   ```

## How to Contribute

Contributions are welcome! Here's how you can help:

- Please write tests and try to use [semantic commit messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

1. Fork the repository
2. Create a new branch for your feature or bug fix (look through the github issues)
3. Make your changes
4. Commit your changes and push to your fork
5. Create a pull request

[This repository](https://github.com/akarsh1995/leetcode-graphql-queries) helped me work with the public Leetcode graphql API
[This medium article](https://ajaynjain.medium.com/how-i-built-a-chrome-extension-with-react-and-vite-without-crxjs-plugin-b607194c4f5e) helped me configure the service-worker.
You may also find them helpful when working with the project.
