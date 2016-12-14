import 'isomorphic-fetch';
import React, { Component } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';

class CreateArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: [],
      tag:'',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChanege = this.onTagsChanege.bind(this);
    this.onQuilChange = this.onQuilChange.bind(this);
  }



  handleSubmitClick = () => {
    const confirm = window.confirm('確定要新增文章嗎？');
    if (confirm) {
      // fetch here
      fetch('/api/articles',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.state.title,
          content: this.state.content,
          tags: this.state.tags,
        }),
      })
      .then(() => {
        this.setState({title: '', tags: [], content: ''})
      })
      .then(() => document.location.href="#/articles");
    }
  }

  onTitleChange = (ele) => {
    this.setState({title: ele.target.value, })
  }

  onTagsChanege = (tags) => {
    this.setState({tags: tags })
  }

  onQuilChange = (Qcontent) => {
    this.setState({content: Qcontent})
  }

 

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button
              className="btn btn-info pull-right"
              role="button"
              onClick={this.handleSubmitClick}
              href="#/articles"
            >送出</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="text" className="form-control" value={this.state.title} onChange={this.onTitleChange} placeholder="New Title"></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TagsInput value={this.state.tags} onChange={this.onTagsChanege}/>
          </div>

        </div>
        <div className="row">
          <div className="col-md-12">
            <ReactQuill theme="snow" value={this.state.content} onChange={this.onQuilChange}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateArticlePage;
