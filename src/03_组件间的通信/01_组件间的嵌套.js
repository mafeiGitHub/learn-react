import React, { Component } from "react";
function Header() {
  return <div>我是Header组件</div>;
}
function Main() {
  return (
    <div>
      我是Main组件
      <Banner></Banner>
      <Content></Content>
    </div>
  );
}
function Footer() {
  return <div>我是Footer组件</div>;
}
function Banner(params) {
  return <div>我是Banner组件</div>;
}
function Content(params) {
  return (
    <div>
      我是Content组件
      <ol>
        <li>内容1</li>
        <li>内容2</li>
        <li>内容3</li>
      </ol>
    </div>
  );
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}
