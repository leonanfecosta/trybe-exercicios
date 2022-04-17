import React from "react";

class Search extends React.Component {
  render () {
    const {match:{params:{searchTerm}}} = this.props;
    return (
      <div>{searchTerm}</div>
    );
  }
}

export default Search;
