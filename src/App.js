import logo from './logo.svg';
import './App.css';
// import Button from 'antd/es/button'
// import 'antd/dist/antd.css'
import { Form, Input, Button} from 'antd';
import CommentList from './components/CommentList'
import Compond from './components/Compond'
function App() {
  return (
    <div className="App">
          <CommentList/>
          <Compond/>
    </div>
  );
}

export default App;
