import './App.css';
import { gql, useQuery } from '@apollo/client';
import Search from './components/Search';

function App() {

  return (
    <div className="App">
      <Search />
      {/* <DisplayRepo /> */}
    </div>
  );
}

export default App;
