# Football World Cup Score Board

## Home task: develop a new Live Football World Cup Score Board that shows matches and scores.

The board supports the following operations:
1. Start a game. When a game starts, it should capture (being initial score 0 – 0):

     a. Home team 

     b. Away team
2. Finish game. It will remove a match from the scoreboard.
3. Update score. Receiving the pair score; home team score and away team score
updates a game score.
4. Get a summary of games by total score. Those games with the same total score will
be returned ordered by the most recently added to our system.

As an example, being the current data in the system:

     a. Mexico - Canada: 0 - 5
     b. Spain - Brazil: 10 – 2
     c. Germany - France: 2 – 2
     d. Uruguay - Italy: 6 – 6
     e. Argentina - Australia: 3 - 1
The summary would provide with the following information:

     1. Uruguay 6 - Italy 6
     2. Spain 10 - Brazil 2
     3. Mexico 0 - Canada 5
     4. Argentina 3 - Australia 1
     5. Germany 2 - France 2

## Tech Approach

`Initial App Setup`:

To speed up the initial setup, I utilized my [starter web application](https://github.com/gianlucasudano/web-dev-lab).
While this allowed for more time to understand the integration of dependencies required for this home task, it did result in some unnecessary dependencies and unused features being included.

* **Pros**: Environment was ready to use and based on my previous expertise.
* **Cons**: Some unnecessary dependencies and features are not used or useless for this kind of project.

`Folder Structure`:

I followed a conventional approach to ensure separation of concerns, scalability, and easy management and accessibility of resources.

* **Pros**: Ensures easy management and accessibility of resources.
* **Cons**: No cons

`UI and Use of Third-Party Libraries`:

To expedite the development process, I utilized pre-built components and combined them to create custom components.

In a real project, there are more factors to consider beyond simply selecting an external library. Particularly in anticipation of implementing an internal Design System in the future, it may be preferable to opt for a less pre-packaged solution. While MUI components offer many features, not all of them may be applicable for the intended use case.

* **Pros**: Accelerates implementation and allows for greater focus on the primary task.
* **Cons**: There is a minor risk associated with using Material-UI, as it can occasionally be slow or buggy. 

`Testing`:

I used React Testing Library and Vitest, which is recommended by most known frameworks.

* **Pros**: Ensures the quality of the app and provides a reliable testing framework.
[Vitest](https://vitest.dev/guide/comparisons.html#jest)
* **Cons**: No cons

## Tasks-Prioritization

When I started working on my task, I split the problem into two parts - the visualization and the feed. The visualization component was designed to be agnostic about the logic of the feed/APIs and would only receive data, normalize it, and display it in the required order.

To simulate the feed that the page would receive, I thought about how to insert a new entry (when a match starts), modify an existing entry (when a team scores a goal), and remove an entry (when the match ends). With this approach defined, I proceeded to write helpers for normalizing the data and the React component for the visualization.

After completing the visualization component, I created a matches bar that allows for the simulation of random events. Although there may be some strange behavior in the Score Board, like a game that, despite having started later, could end earlier than the others that started prior to it, the scope of the task was only to simulate events and not to reproduce a realistic scenario.

Regarding testing, I chose to only test the code related to the visualization because it was the main goal of the task. I omitted testing for the matches bar because in a real case, this logic would happen outside of the component. The implementation of the matches bar was only intended to support showing how the component works with periodic updating of the data.

## Areas for Improvement
Two areas for improvement to enhance the app's user experience are:

* Improve UI/UX design to make it more engaging and informative for users.
* Increase code reusability to make it more scalable and efficient in larger scenarios.

## Feedback about the test

Overall, I really enjoyed the test and found it to be a positive experience. It increased my curiosity about the challenges of working in Sportradar and offered an initial idea of the types of challenges that may be encountered.

I appreciated the honesty of the test and the fact that it allowed me to learn new things and practice my existing skills. Overall, it was a great opportunity to showcase my abilities and demonstrate my passion for programming.

# Installation

Download, or clone the repo in one folder and install packages.

```bash
To install dependencies use `npm install`
```

# Usage

To run the app, open your terminal and execute the command `npm run dev`. Once the app has started, you should see something similar to the following.

###  Runs the app `npm run dev`
```bash
     VITE v4.1.1  ready in 643 ms
      ➜  Local:   http://localhost:5173/
      ➜  Network: use --host to expose
      ➜  press h to show help
```

### Navigates on the browser `http://localhost:5173`
Once the app and the server are running, open a browser and visit this page: http://localhost:5173
#
To run all tests, open a new tab in your terminal and execute the command `npm run test`. Once the tests has executed, you should see something similar to the following.
### Runs the tests `npm run test`
``` bash
    ✓ src/pages/Example/ErrorCard.test.tsx (1)
    ✓ src/pages/Example/AddData.test.tsx (2) 801ms
    ✓ src/pages/Example/DataDisplay.test.tsx (3) 791ms
    ✓ src/App.test.tsx (2)

    Test Files  4 passed (4)
         Tests  8 passed (8)
      Start at  18:50:49
      Duration  5.92s (transform 227ms, setup 3.52s, collect 7.34s, tests 1.75s)


    PASS  Waiting for file changes...
          press h to show help, press q to quit
```

## The project utilized the following tools:

- "vite": https://vitejs.dev/
- "vitest": https://vitest.dev/
- "react": https://reactjs.org/
- "typescript": https://www.typescriptlang.org/
- "testing-library": https://testing-library.com/
- "MUI": https://mui.com/



