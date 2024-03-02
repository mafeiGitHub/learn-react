import React, { Component } from "react";
import propTypes from "prop-types";

function ChildCpn2(props) {
  const {name,age,height} = props
  return(
   
      <div>
        <h2>{"姓名：" + name + " 年龄：" + age + " 身高：" + height}</h2>
      </div>
  
  )
}
class ChildCpn extends Component {
  // constructor(props){
  //   super(props)
  // }
  static propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    height: propTypes.number,
  };
  static defaultProps = {
    name: "张三",
    age: 10,
    height: 1.55,
  };
  render() {
    const { name, age, height } = this.props;
    return (
      <div>
        <h2>{"姓名：" + name + " 年龄：" + age + " 身高：" + height}</h2>
      </div>
    );
  }
}
// ChildCpn.propTypes = {
//   name: propTypes.string,
//   age: propTypes.number,
//   height: propTypes.number,
// };
// ChildCpn.defaultProps={
//   name:'张三',
//   age:10,
//   height:1.55
// }
ChildCpn2.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  height: propTypes.number,
};
ChildCpn2.defaultProps={
  name:'张三',
  age:10,
  height:1.55
}

export default class App extends Component {
  // constructor(props){
  //   super(props)
  // }

  render() {
    return (
      <div>
        <ChildCpn name="xiaofei" age={13} height={1.8}></ChildCpn>
        <ChildCpn name="xiaofei2" age={16} height={1.85}></ChildCpn>
        <ChildCpn></ChildCpn>
<br></br>
        <ChildCpn2 name="xiaofei2" age={16} height={1.85}></ChildCpn2>
        <ChildCpn2 name="xiaofei2" age={16} height={1.85}></ChildCpn2>
        <ChildCpn2></ChildCpn2>
      </div>
    );
  }
}
