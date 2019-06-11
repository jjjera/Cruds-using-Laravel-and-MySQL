import React, { Component } from 'react';
import axios from 'axios';

export default class EditArticle extends Component{

    constructor(props){
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            title: '',
            body: ''
        }
    }

    componentWillReceiveProps(nextProps){
        // console.log('props in will receive',nextProps.datatoEditPage);
        this.setState({
                title: nextProps.datatoEditPage.title, 
                body: nextProps.datatoEditPage.body,
                id: nextProps.datatoEditPage.id
            });
        // console.log('state title',this.state.editTitle)
    }

    handleChange = (event) => {
        this.setState({title: event.target.value});
        // console.log('event value is',event.target.value);
        // console.log('change fnc called',this.state);
    }

    handleChange1 = (event) => {
        this.setState({body: event.target.value});
        // console.log('event value is',event.target.value);
        // console.log('change fnc called',this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let editedValues = this.state;
        // console.log('editedValues are',editedValues);
        axios.put('http://localhost:8000/api/editarticle',editedValues)
        .then((response) => {
            alert('Article edited successfully',response);
            window.location.reload();
            // console.log('response is',response);
        })
        .catch((error) => {
            alert('error called',error);
            window.location.reload();
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Edit Article</h1>
                    <div>
                        <label>Edit Title</label>
                        <input type="text" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Edit Body</label>
                        <input type="text" value={this.state.body} onChange={this.handleChange1}/>
                    </div>
                    <button onClick={this.handleSubmit}>Save</button>
                </form>
            </div>
        )
    }
}