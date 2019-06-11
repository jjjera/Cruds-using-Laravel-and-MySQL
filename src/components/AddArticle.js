import React, { Component } from 'react';
import axios from 'axios';


class AddArticle extends Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            title: '',
            body: ''
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const url = 'http://localhost:8000/api/article';
        let articleData = this.state;
        // console.log('state values are',this.state);
        axios.post(url,articleData)
        .then((response) => {
            alert('Article added successfully!!',response);
            window.location.reload();
        })
        .catch((error) => {
            alert(error);
            window.location.reload();
        })
        // console.log('submit func called',this.state);
    }

    handleChange = (event) => {
        this.setState({title: event.target.value});
        // console.log('event value is',event.target.value);
        // console.log('change fnc called',this.state);
    } 

    handleChange1 = (event) => {
        this.setState({body:event.target.value});
        // console.log('event value is',event.target.value);
        // console.log('change fnc called',this.state);
    }

    render(){
        // console.log('props values in add article',this.props.getArticleData)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Add Article</h1>
                    <div>
                        <label>Article Title</label>
                        <input type="text" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Article Body</label>
                        <input type="text" value={this.state.body} onChange={this.handleChange1} />
                    </div>
                    <button className="btn btn-primary">Add Article</button>
                </form>
            </div>
        )
    }
}

export default AddArticle;