import './App.css';
import MainPage from './components/MainPage';
import SideMenu from './components/SideMenu';


function App() {
  return (
    <div className="App">
      <div className='sidemenu'><SideMenu/></div>
      <div><MainPage/></div> 
    </div>
  );
}

export default App;
