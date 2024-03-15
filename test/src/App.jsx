import React, { Component } from 'react';

import './App.css';
import Home from './component/Home/Home';


const min =0
const max = 7
const colorCard = ['#4287f5', '#13eddf', '#1313ed', '#b713ed', '#ed1372', '#3fed13', '#e9f50a', '#f57b0a'];
class App extends Component {
  state = { searchInput: '', userdata: [] };

  componentDidMount() {
    const storedData = localStorage.getItem('user');
    
    if (storedData) {
      this.setState({ userdata: JSON.parse(storedData) });
    }
  }
 
  save = () => {
    const { userdata } = this.state
    localStorage.setItem('user', JSON.stringify(userdata));
    
    
  }

  delet = (key) => {
    
    
    const { userdata } = this.state;


    const newdata = userdata.map((each) => {
      if (each.id === key) {
        return {}
      }
    })
    

    const filteredUsersData = userdata.filter((each) => each.id !== key);
    this.setState({ userdata: filteredUsersData });

    

 
    
   
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  btnClick = () => {
    const randomNumber =  Math.floor(Math.random() * (max - min + 1))
   
    this.setState({number: randomNumber})
    const { searchInput, userdata } = this.state;
    if (searchInput !== '') {
      const valueA = { name: searchInput, stDel: false, id: searchInput + 1 ,randomNumber:colorCard[randomNumber]};
      const updatedData = [...userdata, valueA];
      this.setState({ userdata: updatedData, searchInput: '' });
      
    }
  };

  render() {
    const { searchInput, userdata } = this.state;
    return (
      <div className="main">
        <div className="card">
          <div className="card_main">
            <input
              placeholder="Inter Name"
              type="text"
              className="input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <button className="button" onClick={this.btnClick}>
              Add
            </button>
          </div>
          {userdata.map((each) => (
            <Home key={each.id} name={each.name} id={each.id} stDel={each.stDel} det={this.delet} random={each.randomNumber} />
          ))}
          <button onClick={this.save} className="button" >Save</button>
        </div>
      </div>
    );
  }
}

export default App;
