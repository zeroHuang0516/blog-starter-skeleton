import 'isomorphic-fetch';
import React, { Component, PropTypes } from 'react';

class SingleArticlePage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      article: {},
    };
  }

  componentDidMount() {
    const id = this.props.id;
    fetch(`/api/articles/${id}`)
      .then(res => res.json())
      .then(article => {
        this.setState({
          article,
        });
      });
  }

  componentDidUpdate() {
    const id = this.props.id;
    fetch(`/api/articles/${id}`)
      .then(res => res.json())
      .then(article => {
        this.setState({
          article,
        });
      });
  }

  render() {
    const { article } = this.state;
    return (
      <div className="container omg">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>{article.title}</h1>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>{article.content}</p>
          </div>
        </div>
        <div className="row">
          <button
            className="btn btn-info"
            role="button"
            onClick={this.handleEditClick}
          >編輯</button>
          <button
            className="btn btn-warning"
            role="button"
            onClick={this.handleDelClick}
          >刪除</button>
        </div>
      </div>
    );
  }
}

export default SingleArticlePage;
