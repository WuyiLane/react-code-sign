import React, { Component } from "react";
import { Button } from "antd";
function Dialog(props) {
  return (
    //  匿名插槽
    <div style={{ border: `3px solid ${props.color || "blue"}` }}>
      {props.children}
      <div>
        {/*   具名插槽 btn 组合 */}
        {props.btn}
      </div>
    </div>
  );
}
function WelcomeDialog() {
  const confirmBtn = <Button type="info">确定</Button>;
  return (
    <Dialog color="green" btn={confirmBtn}>
      <p>Welcome</p>
      <h2>欢迎光临！</h2>
    </Dialog>
  );
}
function ThankDialog() {
  const ThankBtn = <Button type="primary">确认</Button>;
  return (
    // 可以是一个变量，可以是一个组件
    // 传递组件 btn
    <Dialog color="yellow" btn={ThankBtn}>
      <p>Thanks</p>
      <h2>谢谢您!</h2>
    </Dialog>
  );
}
export default class Compond extends Component {
  render() {
    return (
      <div>
        <WelcomeDialog />
        <ThankDialog />
      </div>
    );
  }
}
