import 'isomorphic-fetch';
import React, { Component } from 'react';
const ArticleList = props => <div className="list-group">
  <a href={props.href} className="list-group-item list-group-item-action">
    <h1 className="list-group-item-heading">{props.title}</h1>
    <h5>Created at {props.createdAt}</h5>
    <h5>Last updated at {props.updateAt}</h5>
    <p className="list-group-item-text">{props.content}</p>
  </a>
</div>

class ArticlesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    // fetch here
    fetch('/api/articles')
    .then(res => res.json())
    .then(json => {
      this.setState({articles:json});
    });
  }

   renderContent = (con) => {
      return <div dangerouslySetInnerHTML={{__html: con}}/>;
  };
  render() {
    const {articles} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
              {articles.map((article, index) =><ArticleList key={index+1}
                title={article.title}
                href={"#/articles/"+article._id}
                tags={article.tags}
                content={this.renderContent(article.content)}
                createdAt={article.created_at}
                updateAt = {article.updated_at} />
                )}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlesPage;




