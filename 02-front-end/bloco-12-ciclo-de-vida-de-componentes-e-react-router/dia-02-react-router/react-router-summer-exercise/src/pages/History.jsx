import React from "react";

class History extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <h1>History</h1>
        {history.length > 0 ? (
          history.map((item) => <p key={item}>{item}</p>)
        ) : (
          <p>Não há histórico</p>
        )}
      </div>
    );
  }
}

export default History;
