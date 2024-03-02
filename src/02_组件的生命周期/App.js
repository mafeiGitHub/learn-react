import React, { Component } from "react";

class Cpn extends Component {

  render() {
    return (
      <div>我是Cpn组件</div>
    )
  }
  componentWillUnmount(){
    console.log('执行了Cpn组件的componentWillUnmount方法');
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      isShow:true
    };
    console.log('执行了组件的constructor方法');
  }
  render() {
    console.log('执行了组件的render方法');
    return (
      <div>
        我是App组件
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <br/>
        <button onClick={()=>this.changeShow()}>切换</button>
        {this.state.isShow?<Cpn/>:''}
    
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter+1,
    });
  }
  changeShow(){
    this.setState({
        isShow:!this.state.isShow
    })
  }
  componentDidMount(){
    console.log('执行了组件的componentDidMount方法');
  }
}
