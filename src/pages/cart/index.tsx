import * as React from 'react'
import { Link } from 'react-router-dom'
import { getBookData } from "../../helpers/request"
import Book from "../../components/book"
export default class Cart extends React.Component<{},{
  books: Array<JSX.Element>
}>
{
  state = {
    books: new Array()
  }

  componentWillMount() {
    
    var storage = window.localStorage
    var cart = storage.getItem("cart") || ""
    var items = cart.split("|")
    
    items.forEach((bookId: string) => {
      getBookData(bookId)
        .then((response) => {

          var currentBooks = this.state.books
          currentBooks.push(
            <Book col={2} key={response.data.id} id={response.data.id} title={response.data.volumeInfo.title} image={response.data.volumeInfo.imageLinks.small} hideAddToChart={true}/>
          )

          this.setState({
            books: currentBooks
          })
        })
    })
  }

  onAdd = (bookId: string) => () => {
      var storage = window.localStorage
      var cart = storage.getItem("cart") || ""
      var items = cart.split("|")
      items.push(bookId)
      storage.setItem("cart",items.join("|"))
  }

  render() {
      return (
        <div className="container">
          <div className="row">
              <h1>Chart</h1>
          </div>
          <div className="row">
                {this.state.books}
              </div>
        </div>
      )
  }
}

