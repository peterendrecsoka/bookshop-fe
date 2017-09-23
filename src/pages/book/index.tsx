import * as React from 'react'
import { Link } from 'react-router-dom'
import { getBookData } from "../../helpers/request"
import AddToChart from "../../components/addToChart"

interface BookProps {
  match?: {
    params: {
      id: string 
    }
  }
}

interface BookState {
  data?: {
    title: string,
    image: string,
    description: string,
    authors: Array<string>
    publishedDate: string,
  }
  loaded?: boolean
}

export default class Book extends React.Component<BookProps,BookState> {

  componentDidMount() { 
    this.getBookData(this.props.match.params.id)
  }

  componentWillMount() {
    this.setState({
      loaded: false
    })
  }

  getBookData = (bookId: string) => {
    this.setState({ loaded: false })
    getBookData(bookId)
      .then((response) => {
        this.setState({
          data: {
            title: response.data.volumeInfo.title,
            image: response.data.volumeInfo.imageLinks.medium,
            description: response.data.volumeInfo.description,
            authors: response.data.volumeInfo.authors,
            publishedDate: response.data.volumeInfo.publishedDate
          },
          loaded: true
        })
      })
  }

  render () {
    if (this.state.loaded == false) {
      return (<div>Loading</div>)
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{this.state.data.title}</h1>
            <h4>{this.state.data.publishedDate}</h4>
            <h4>{this.state.data.authors}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <img src={this.state.data.image} style={{width: "100%"}}/>
          </div>
          <div className="col-10" dangerouslySetInnerHTML={{ __html: this.state.data.description }} />
        </div>
        <div className="row">
          <div className="col">
            <AddToChart bookId={this.props.match.params.id} />
          </div>
        </div>
      </div>
    )
  }

}
