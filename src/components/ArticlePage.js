import React , { Component } from 'react';
import axios from 'axios';
import EditArticle from './EditArticle';

class ArticlePage extends Component {

    constructor(props){
        super(props);
        // this.editArticle = this.editArticle.bind(this);
        this.state = {
            datas: [],
            datatoEditPage: {},
            isOpen: false
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/products')
        .then((response) => {
            this.setState({datas:response.data});
            // console.log('response is',response);
        })
        .catch((error) => {
            console.log('Error block called',error);
        });
    }

    gotoArticle = (data) => {
        // let itemId = data.id;
        // console.log('item id is',itemId);
        // console.log('datas are',data)
        this.setState({datatoEditPage: data, isOpen: true});
    }

    deleteArticle = (id) => {
        let itemId = id;
        const url = 'http://localhost:8000/api/deletearticle/'+itemId;
        // console.log('deleteArticle func called',itemId);
        axios.delete(url,itemId)
        .then((response) => {
            alert('Article deleted successfully');
            window.location.reload();
            // console.log('response for delete',response);
        })
        .catch((error) => {
            alert('Error block called',error);
            window.location.reload();
        })
    }

    render(){
        return(
            <div>
                <h1>Article List</h1>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Body</td>
                            <td>Title</td>
                        </tr>
                        </thead>
                            {this.state.datas.map((data,i) => {
                            return(
                                <tbody key={i}>
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.title}</td>
                                        <td>{data.body}</td>
                                        <td><button onClick={() => this.gotoArticle(data)}>Edit Article</button></td>
                                        <td><button onClick={() => this.deleteArticle(data.id)}>Delete Article</button></td>
                                    </tr>
                                </tbody>
                                )
                            })}
                </table>
                { this.state.isOpen === true && <EditArticle datatoEditPage={this.state.datatoEditPage}/> }
            </div>
        )
    }
}

export default ArticlePage;