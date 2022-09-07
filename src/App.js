
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { LoginPage } from './components/LoginPage';
import { UserAccount } from './components/UserAccount';
import { Routes, Route } from 'react-router-dom'
import { Tasks} from './components/Tasks';

function App() {
  return (

<Tasks/>
      // <Routes>
      //   <Route path='/' element={<LoginPage />} />
      //   <Route path='/User' element={<UserAccount />} />
      // </Routes>

  )
}

export default App;
