import React, { Component } from 'react'

class ChildCpn extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    const {name,age,height}=this.props
    return (
      <div>
        <h2>{'姓名：'+name+'年龄：'+age+'身高：'+height}</h2>
      </div>
    )
  }
}



export default class App extends Component {
  // constructor(props){
  //   super(props)
  // }

  render() {
    return (
      <div>
        <ChildCpn name='xiaofei' age='15' height='1.80'></ChildCpn>
        <ChildCpn name='xiaofei2' age='15' height='1.85'></ChildCpn>
      </div>
    )
  }
}
