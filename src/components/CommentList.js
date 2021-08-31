import React, { Component, PureComponent } from "react";
/***
 * // 第二种 解构PureComponent
 * 评论组件
 *
 *
 */
import "../author.css";
// 傻瓜式组件 只是用于渲染展示内容

/***class Comment extends Component{
   shouldComponentUpdate(nextProps,nextState){
       // 性能优化
       if( nextProps.comment.content === this.props.comment.content){
           return false;
           // 不渲染
       }else{
           return true;
       }
   }
    render() {
        const { id, content, author } = this.props.comment; // 解构
        console.log('render')
        return (
          <div className="author">
            <p>{id}</p>
            <p>{content}</p>
            <p>{author}</p>
          </div>
        );
    }
}***/

/***
 * 第二个解决方案
 * PureComponent  浅比较实现的函数类
 */

// class Comment extends PureComponent {
//     // 继承于方法 不需要该性能优化
// //   shouldComponentUpdate(nextProps, nextState) {
// //     // 性能优化
// //     if (nextProps.comment.content === this.props.comment.content) {
// //       return false;
// //       // 不渲染
// //     } else {
// //       return true;
// //     }
// //   }
//   render() {
//     // 1.const { id, content, author } = this.props.comment; // 解构
//     const { id, content, author } = this.props;
//     console.log("render");
//     return (
//       <div className="author">
//         <p>{id}</p>
//         <p>{content}</p>
//         <p>{author}</p>
//       </div>
//     );
//   }
// }
// 第三种比较方法 => 高阶组件 => 本质是个函数
// 组件组合而非继承
// 高阶组件
const Comment = React.memo(({id,content,author}) =>{
  console.log('render')
 return (
   <div>
     <p>{id}</p>
     <p>{content}</p>
     <p>{author}</p>
   </div>
 )
})
export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
  // 性能优化
  // 请求接口获取数据
  componentDidMount() {
    setInterval(() => {
      this.setState({
          // 应该深比较
        comments: [
          {
            id: 1,
            author: "facebook",
            content: "react非常好",
          },
          {
            id: 2,
            author: "尤雨溪",
            content: "Vue非常好",
          },
        ],
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        {this.state.comments.map((ite, i) => {
          //props ite
          return (
            <Comment key={ite.id}{...ite}></Comment>
            // <Comment key={ite.id} id={ite.id} content={ite.content} author={ite.author} />
          )
          
            //   <Comment key={ite.id} comment={ite} />;
            // 浅拷贝考的是值
                
        })
        }
      </div>
    );
  }
}
