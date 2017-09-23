import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import * as History from "history"

interface HeaderStates{
  searchQuery: string
}

class Header extends React.Component<{},HeaderStates> {

  state = {
    searchQuery: ""
  }

  onSearch = (history: History.History) => () => {
    history.push("/search/" + this.state.searchQuery);
  }

  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchQuery: event.target.value.replace(" ","+")
    })
  }

  render () {

    return (
      <Route render={({history}) => 
        (
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-brand">
            <Link to='/'>Book Shop</Link>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <div className="nav-link disabled"><Link to='/cart'>Cart</Link></div>
                </li>
              </ul>
              <div className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={this.onSearchChange} />
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.onSearch(history)}>Search</button>
              </div>
            </div>
          </nav>
      )
      } />
    )
  }

}

export default Header
