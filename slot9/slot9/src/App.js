import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import UserProfile from './components/UserProfile';
import NameList from './components/NameList';
function App() {
  const userData = { name: "traltb@fe.edu.vn", age: 39 };
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
  return (
    <div className="App">
      <Welcome name='phongndde170408' />
      <UserProfile user={userData} />
      <NameList names={namesList} />
    </div>
  );
}

export default App;
