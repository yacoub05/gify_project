import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './GifList';
import SearchBar from './SearchBar';

import axios from 'axios';

const API_KEY =process.env.API_KEY;

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            
            gifs: []
        };
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleTermChange(term) {

       
            
            

        axios.get(`http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=hOc8eVawaaNYe1utbjKzgQn5xQ6E0VbU`)
            .then( response => {   // Called when data is returned
              this.setState( {
                  gifs:response.data.data
                
                } );
              let x = [...response.data.data];

              for (let i = 0; i<x.length; i++){
                let y = x[i].images.original.url
                console.log(y);
              }



             
             
              

              
             
            })
            .catch( (err)=> console.log(err));
          
        

    //     axios.get(`http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=hOc8eVawaaNYe1utbjKzgQn5xQ6E0VbU`)
    //    .then(res => {
    //     const gifs = res.data;
    //     this.setState({ terms });
    //   })

        // const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=hOc8eVawaaNYe1utbjKzgQn5xQ6E0VbU`;

        // request.get(url, function(err, res) {
        //     console.log(res.body.data[0]);
        // });
    }

    render() {
        return (
            <div className="app_container">
                <h1>SEARCH SOMETHING!</h1>
                <SearchBar onTermChange={this.handleTermChange} />
                <div className="listgif"><GifList gifs={this.state.gifs} /></div>
                
            </div>

            
        );
    }
}

export default App;
