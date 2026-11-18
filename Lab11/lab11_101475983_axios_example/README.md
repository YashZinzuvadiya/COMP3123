# Lab11 - Working with Axios and Fetch API

COMP3123 - Full Stack Development I
Yash Zinzuvadiya - 101475983

React app that loads 10 random users from `https://randomuser.me/api/?results=10` three ways:

| Tab | File | Approach |
| --- | --- | --- |
| Axios (Class Component) | `src/components/PersonList.js` | `axios.get` inside `componentDidMount`, stored in `this.state.persons` (lab reference code) |
| Fetch API (Hooks) | `src/components/PersonListFetch.js` | native `fetch` inside `useEffect` with `useState` |
| TanStack Query + Axios | `src/components/PersonListQuery.js` | `useQuery` from `@tanstack/react-query` with an Axios query function |

Each user is shown in a React Bootstrap card (`src/components/PersonCard.js`).

## Packages

```bash
npm install --save axios
npm install --save react-bootstrap bootstrap
npm install --save @tanstack/react-query
```

## Run

```bash
npm install
npm start
```

Open http://localhost:3000.

## Screenshots

See the `Screenshots` folder.
