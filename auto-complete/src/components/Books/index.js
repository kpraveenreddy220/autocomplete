import React, { Component } from 'react'

export class index extends Component {
    render() {
        const { books, handleChange, setBook, book } = this.props
        return (
            <div className="city" >
                <div>
                    <form>
                        <div className="form-group">
                            <label for="email">Search Books:</label>
                            <input type="text" className="form-control" style={{ width: "500px" }} name="book" value={book} onChange={(e) => handleChange(e)} />
                        </div>
                    </form>
                </div>
                <div className="results">
                    {this.props.books.error !== "" ?
                        <div className="cities">
                            {books.error}
                        </div> :
                        books.filtered_books.map(books => (<div className="cities" onClick={() => setBook(books.title)}>
                            <span >{books.title}</span>
                            <span style={{ opacity: 0.5, fontSize: "10px" }}>Author :{books.author}</span>
                        </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default index
