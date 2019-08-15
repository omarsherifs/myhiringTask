import React,{Component} from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';

import Map from './componants/Map';
import Header from './componants/header';

import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import './App.css';
import "leaflet/dist/leaflet.css";

import "leaflet/dist/leaflet.js";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js";

import Users from './componants/users';


import axios from 'axios';
class App extends Component{

  state = {
    users: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')
      .then(res => this.setState({users:res.data}))
  }

  markComplete = (id) => {
    this.setState({users:this.state.users.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

 


  render(){
    //console.log(this.state.users);
      return(
        <Router>
          <div className="App">
            <Header></Header>
            <Route exact path="/" render={props => (
              <React.Fragment>
            <Map/>
              </React.Fragment>
            )}/>
        
        <Route path="/users"  render={(props) => (
								<React.Fragment>
                    <div  class="table-wrapper">
                    <table class="fl-table">
                      <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <Users exact users={this.state.users} />
                        </tbody>
                      </table>
                    </div>
								</React.Fragment>
							)}/>


        </div>
      </Router>
      );
  }
}

export default App;