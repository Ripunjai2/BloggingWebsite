import TopBar from './components/topbar/topbar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { Context } from './context/Context';
function App() {
  // const { user } = useContext(Context);
  return (
    <>
      <TopBar />
      <Write />
    </>
  );
}

export default App;
