import React from 'react';
import './SearchBar.css'

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.hnadleTermChange =  this.hnadleTermChange.bind(this);


    }
    search() {
        this.props.onSearch(this.state.term);
    }
    hnadleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    render() {
        return(
            <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={this.hnadleTermChange}/>
            <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        );
    }
}