import React, { Component } from 'react'

class ClockApp extends Component {
  constructor(){
    super()
    this.state = {
      time:new Date().toLocaleTimeString()
    }
  }


  componentDidMount(){
    this.timerID = setInterval(()=>this.tick(),1000)

  }


  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick = ()=>{
    this.setState({
      time:new Date().toLocaleTimeString()
    })
  }

  render() {
    return (
      <>
        Time:{this.state.time}
      </>
    )
  }
}

export default ClockApp
