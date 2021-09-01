import React, { Component } from "react";
/***
 * 高阶组件
 *
 *  组件设计的目的:保证组件功能的单一性
 *  高阶组件不是组件,本质上时一个函数,这个函数接收一个组件或者一个组件或者多个组件，
 *  返回一新的组件
 *  y = x + b  // x=>普通组件 加b (加工）返回一个新的组件
 *  高阶函数
 *  定义 接收的参数 是函数或者返回值是函数
 *  场景: 数组遍历的 forEach map 定时器 promise 高阶组件
 *  实现一个更加强大的动态功能
 * 
 *   为什么我们需要高阶组件？？
 *    react 高阶组件能够让我们写出易于维护的react代码
 *     比如你给我一个奥特曼我给你一个超级奥特曼
 * y = kx +b =>
 *  x好比是普通组件，k和b就是当前普通组件的变量属性和方法,y是返回的新组件
 * [1,3,5] = [3,5,7]
 */
// 创建一个函数 =>返回一个新的组件
const HighOrderCom = (Comp) => {
  // 传入一个组件 Comp => // 返回一个新的组件
  // 1.属性代理
  // 匿名组件
  return class extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      console.log("ajax请求接口");
    }

    render() {
      return (
          // 1.属性代理常见的实现方式
        <Comp {...this.props} name="react" content="高阶组件的使用"></Comp>
      );
    }
  };

  // const attr = { type:'高阶组件',price:1689}
  // const NewComponet  = (props) =>{
  // //  return <Comp {...props} {...attr}></Comp> // 加工
  // }
  // // return NewComponet
};
class CompHoc extends Component {
  render() {
    return (
      <div>
        <br />
        {/* <h3>当前课程:{this.props.type}</h3>
                <h3>当前价格:{this.props.price}</h3> */}
        {/* 
        这个组件里因为用Comp 这个组件可以渲染
        
        */}
        <h3>当前课程:{this.props.name}</h3>
        <h3>当前价格:{this.props.content}</h3>
      </div>
    );
  }
}
// 如果当前用了HighOrderCom 这个组件 
export default HighOrderCom(CompHoc);
