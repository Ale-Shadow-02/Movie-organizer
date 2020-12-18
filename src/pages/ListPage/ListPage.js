import React, { Component } from 'react';
import './ListPage.css';

class ListPage extends Component {
    state = {
      movies: [],
      title: ''
    }
    componentDidMount() {
      const apiKey = "d3496eed";
        const id = this.props.match.params.id;
        console.log(id);
        // TODO: запрос к сервер на получение списка
      fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
        .then(res => res.json())
        .then(data => {
          this.setState({title: data.title})
          data.movies.forEach(elem => {
            fetch(`http://www.omdbapi.com/?i=${elem}&apikey=${apiKey}`)
              .then(res => res.json())
              .then(data => {
                this.setState({movies: [...this.state.movies, data]})
              })
          })
        })
        // TODO: запросы к серверу по всем imdbID
    }
    render() { 
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.state.title}</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={"https://www.imdb.com/title/" + item.imdbID} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}


 
export default ListPage;
