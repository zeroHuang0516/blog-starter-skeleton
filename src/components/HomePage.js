import React, { Component } from 'react';


class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1>Hi, Welcome Blog!</h1>
              <p><a className="btn btn-success btn-lg" href="#/articles" role="button">Go to Articles List Page</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
