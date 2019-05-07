import React, { Component } from 'react';
import Table from '../components/Table';
import SearchBox from '../components/SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      searchfield: '',
      emailBox: '',
      phoneBox: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ people: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  onEmailChange = (event) => {
    this.setState({emailBox: event.target.value});
  }

  onPhoneChange = (event) => {
    this.setState({phoneBox: event.target.value});
  }

  handleEmailClick = (email, id) => {
    let updatedPeople = this.state.people.slice();
    updatedPeople.forEach(el => {
      if(el.id === id) {
        el.email = email;
      }
    })
    this.setState({
      people: updatedPeople
    })
  }

  

  handlePhoneClick = (phone, id) => {
    let updatedPeople = this.state.people.slice();
    updatedPeople.forEach(el => {
      if(el.id === id) {
        el.phone = phone;
      }
    })
    this.setState({
      people: updatedPeople
    })
  }
  

  render() {
    const { people, searchfield } = this.state;
    const filteredPeople = people.filter(person =>{
      return person.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !people.length ?
      <h1>Loading</h1> :
      (
        <div>
          <h1>Far App</h1>
          <SearchBox searchChange={this.onSearchChange}/>
            <Table 
              people={filteredPeople} 
              handleEmailClick={this.handleEmailClick}
              handlePhoneClick={this.handlePhoneClick}
              onEmailChange={this.onEmailChange}
              onPhoneChange={this.onPhoneChange}
              emailBox={this.state.emailBox}
              phoneBox={this.state.phoneBox}
               />
        </div>
      );
  }
}

export default App;