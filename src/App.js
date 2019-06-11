import React, { Component } from 'react';
import ArticlePage from './components/ArticlePage';
import AddArticle from './components/AddArticle';


class App extends Component{

  constructor(props){

    super(props);
    this.state={
      articleData: {}
    }

  }

  render(){

    return (
      <div >
        <header>
          <AddArticle />
          <br/>
          <ArticlePage />
        </header>
      </div>
    );
  }

}

export default App;
