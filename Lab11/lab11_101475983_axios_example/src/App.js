import { Container, Tabs, Tab } from 'react-bootstrap';
import PersonList from './components/PersonList';
import PersonListFetch from './components/PersonListFetch';
import PersonListQuery from './components/PersonListQuery';
import './App.css';

// Open a tab directly from the URL, e.g. http://localhost:3000/#fetch
const TAB_KEYS = ['axios', 'fetch', 'query'];
const initialTab = window.location.hash.replace('#', '');

function App() {
  return (
    <Container className="py-4">
      <header className="text-center mb-4">
        <h1 className="fw-bold">Lab11 - Working with Axios and Fetch API</h1>
        <p className="text-muted mb-0">
          Random users from <code>https://randomuser.me/api/?results=10</code>
        </p>
        <p className="text-muted small">Yash Zinzuvadiya &middot; 101475983 &middot; COMP3123</p>
      </header>

      <Tabs
        defaultActiveKey={TAB_KEYS.includes(initialTab) ? initialTab : 'axios'}
        onSelect={key => window.history.replaceState(null, '', `#${key}`)}
        id="api-tabs"
        className="mb-4"
        justify
        mountOnEnter
      >
        <Tab eventKey="axios" title="Axios (Class Component)">
          <PersonList />
        </Tab>
        <Tab eventKey="fetch" title="Fetch API (Hooks)">
          <PersonListFetch />
        </Tab>
        <Tab eventKey="query" title="TanStack Query + Axios">
          <PersonListQuery />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
