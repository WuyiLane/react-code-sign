import logo from './logo.svg';
import './App.css';
// import Button from 'antd/es/button'
// import 'antd/dist/antd.css'
import { Form, Input, Button} from 'antd';
import CommentList from './components/CommentList'
import Compond from './components/Compond'
// 高阶组件
import CompHoc from './components/CompHoc'
function App() {
  return (
    <div className="App">
          <CommentList/>
          <Compond/>
          <h3>高阶组件的使用</h3>
          <CompHoc/>
    </div>
  );
}

export default App;
