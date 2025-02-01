
import React, { Component } from 'react';
import './App.css';  

class Heros extends Component { 
  constructor(props) {
    super(props);
    // initialize component state
    this.state = {
      name: '',
      superpower: '',
      score: '',
      heroes: [],  
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // ensure that the score can be chosen only between 1 and 10
    if (name === "score") { 
      let val = parseInt(value, 10);
      if (val < 1) val = 1;
      if (val > 10) val = 10;
      this.setState({ [name]: val });
    } 
    else {
      this.setState({ [name]: value }); 
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // get the values of the input fields
    const name = this.state.name;
    const superpower = this.state.superpower;
    const score = this.state.score;

    // create a new hero object
    const newHero = { 
      name: name, 
      superpower: superpower, 
      score: score 
    };

    // update the state
    this.setState(prevState => ({
      // reset the input fields to empty
      name: '',
      superpower: '',
      score: '',
      heroes: [...prevState.heroes, newHero] // add the new object to list
    }));
  };

  render() {
    return (
      <div>
        <h1>Enter Hero Information</h1>
        {/* collect user input */}
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          <br />
          <label>Superpower:</label>
          <input type="text" name="superpower" value={this.state.superpower} onChange={this.handleInputChange} />
          <br />
          <label>Score:</label>
          <input type="number" name="score" value={this.state.score} onChange={this.handleInputChange}/>
          <br />
          <button type="submit">Add Hero</button>
        </form>
  
        <h2>Best Heroes:</h2>
        <table>
            <tr>
              <th>Name</th>
              <th>Superpower</th>
              <th>Score</th>
            </tr>
            {/* display heroes sorted by highest score*/}
            {this.state.heroes
              .sort((a, b) => b.score - a.score) 
              .map((hero, index) => ( /*mapping through heroes to display each of them */
                <tr key={index}>
                  <td>{hero.name}</td>
                  <td>{hero.superpower}</td>
                  <td>{hero.score}</td>
                </tr>
              ))}
        </table>
      </div>
    );
  }
}

export default Heros;
