import {Component} from 'react'
import BrowserHistoryItems from '../BrowserItems'
import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteItem = id => {
    const {initialHistoryList} = this.props
    const updatedList = initialHistoryList.filter(
      eachItem => eachItem.id !== id,
    )
  }

  render() {
    const {updatedList} = this.props
    const {searchInput} = this.state

    const searchResults = updatedList.filter(eachDest =>
      eachDest.title.toLowerCase().includes(searchInput),
    )

    return (
      <div className="Top-container">
        <div className="Main-container">
          <div className="Header-Bar">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
              />
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
              <input
                type="search"
                placeholder="Search History"
                className="Search-bar"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <div className="Brows-Container">
            <li className="List-container">
              {searchResults.map(eachItem => (
                <BrowserHistoryItems
                  eachItem={eachItem}
                  key={eachItem.id}
                  deleteList={this.deleteItem}
                />
              ))}
            </li>
          </div>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
