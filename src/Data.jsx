import React, { Component } from "react";
import Details from './Details';

class Data extends Component {
  constructor() {
    super();
    this.state = {
      infos: [],
    };
  }

  async componentDidMount() {
    const API_KEY = "922f33efd4374062b55131ac6262b2a3";
    const response = await fetch(
      `http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-03&sortBy=publishedAt&apiKey=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.articles);
    this.setState({ infos: data.articles });
  }
  render() {
    return (
      <div>
        <h1>
          <u>Author name list</u>
        </h1>
        {this.state.infos.map((info) =>  (
          <ul>
            <li>
            
              <h3>{info.author}</h3>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
export default Data;
