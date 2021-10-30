import './App.css';
import React, { Component } from 'react'
import { filterCities, resetCity } from "./Redux/actions/city"
import { resetBooks, filterBooks } from "./Redux/actions/books"
import { connect } from "react-redux";
import Cities from "./components/Cities"
import Books from "./components/Books"
class App extends Component {
  constructor() {
    super()
    this.state = {
      city: "",
      book: ""
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    if (e.target.name === "city") {
      this.props.filterCities(e)
    } else {
      this.props.filterBooks(e)
    }


  }

  setCity = (city) => {
    this.setState({ city: city })
    this.props.resetCity()

  }
  setBook = (book) => {
    this.setState({ book: book })
    this.props.resetBooks()
  }


  render() {
    const { cities, books } = this.props
    return (
      <div className="root">
        <div className="App" >
          <Cities
            cities={cities}
            handleChange={this.handleChange}
            setCity={this.setCity}
            city={this.state.city}
          />
          <Books
            handleChange={this.handleChange}
            books={books}
            setBook={this.setBook}
            book={this.state.book}
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  cities: state.cities,
  books: state.books,

});

export default connect(mapStateToProps, { resetBooks, filterBooks, resetCity, filterCities })(App)
