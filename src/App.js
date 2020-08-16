import React from 'react';
import axios from 'axios';
import GetDataResults from './components/getdataresults'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      values:[],
      currentValue:[]
    }
  }
  
  handleButton= (e) => {
    console.log(document.getElementById(e.target.id).src)
    if(document.getElementById(e.target.id).src=="http://localhost:3000/img/play.png"){
    document.getElementById(e.target.id).src="/img/pause.png"
    }else{
      document.getElementById(e.target.id).src="/img/play.png"
    }
    console.log(document.getElementById(e.target.id))
    console.log(e.target.id)
    this.setState({
      currentValue:e.target.id
    })
  }

  componentDidMount(){
    let dataValues=[]
    axios.get("http://3.132.68.57:8080/v1/getRankedAnswers").then(res => res.data.filter(
      data =>{
     return dataValues.push(data.t)     
       }
    )).then( () => this.setState({
      values:dataValues
    }))
    
  }
  render(){
    return(
      <div>
        <GetDataResults data={this.state.values} clickHandler={this.handleButton}/>
      <div className="currentOne">
        <a onClick={this.handleButton}>
          <img id={this.state.currentValue} className="currentpauseimg" src="/img/pause.png"/>
          </a>
          {this.state.currentValue}
      </div>
      </div>
    )
  }
}

export default App;
