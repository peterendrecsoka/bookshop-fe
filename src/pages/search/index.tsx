import * as React from 'react'
import { getBooks } from "../../helpers/request"

import Book from "../../components/book"

interface SearchProps {
  match?: {
    params: {
      text: string 
    }
  }
}

interface iBook {
  id: string,
  volumeInfo: {
    title: string,
    imageLinks: {
      thumbnail: string
    }
  }
}

interface SearchState {
  books: {
    items: Array<iBook>
  }
}

export default class Search extends React.Component<SearchProps,SearchState>
{
  state = {
    books: {
      items: new Array()
    }
  }

  componentDidMount() { 
    this.getBookList(this.props.match.params.text)
  }
  

  getBookList = (search: string) => {
    getBooks(search)
    .then((response) => {
      this.setState({
        books: response.data
      })
    }) 
  }

  componentWillReceiveProps(nexProps: SearchProps) {
    if (nexProps.match.params.text !== this.props.match.params.text) {
      this.getBookList(nexProps.match.params.text)
    }
  }

  render () {

    var listOfBooks: Array<JSX.Element> = []

    if (this.state.books.items.length > 0) {
      this.state.books.items.map((book: iBook) => {
        listOfBooks.push(<Book key={book.id} id={book.id} title={book.volumeInfo.title} image={book.volumeInfo.imageLinks.thumbnail} />)
      })
    }

    return (
      <div className="container">
        <div className="row">
          Search result: <br />
          <div className="row">
            {listOfBooks}
          </div>
        </div>
      </div>
    )
  }
}
