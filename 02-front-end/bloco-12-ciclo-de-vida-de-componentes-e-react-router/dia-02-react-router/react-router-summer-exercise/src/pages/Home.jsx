import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  saveSearch = () => {
    const { search } = this.state;
    const { onClick } = this.props;
    onClick(search);
  }

  render() {
    const { search } = this.state;
    return (
      <section>
        <h1>Home</h1>
        <form action="">
          <input
            type="text"
            placeholder="Search"
            onChange={this.handleInputChange}
          />
          <Link to={`/search/${search}`}>
            <button type="submit" onClick={this.saveSearch}>Search</button>
          </Link>
        </form>
      </section>
    );
  }
}

export default Home;
