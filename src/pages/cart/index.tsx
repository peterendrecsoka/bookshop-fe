import * as React from 'react'
import { Link } from 'react-router-dom'
import { getBookData } from "../../helpers/request"

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
          currentBooks.push(this.renderCartBook(response.data.volumeInfo.title, response.data.volumeInfo.imageLinks.small))

          this.setState({
            books: currentBooks
          })
        })
    })
  }

  renderCartBook = (title: string, image: string) =>
  {
    return (
      <div className="col-12" key={title}>
        <img src={image} style={{width: "20px"}}/>
        <b>{title}</b>
      </div>
    )
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

