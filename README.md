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
   - Select your dist folder
   - You should be able to see the extension in your extensions tab

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

```

# Todo:

- testing
- add difficulty filter
```
