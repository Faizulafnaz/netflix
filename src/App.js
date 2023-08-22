import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import RowPost from './components/rowpost/RowPost';
import { orginals, action } from './urls';


function App() {
  return (
    <div>
     <NavBar />
     <Banner />
     <RowPost url={orginals} title='Netflix Orginals'/>
     <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
