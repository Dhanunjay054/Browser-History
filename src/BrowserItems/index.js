import './index.css'

const BrowserHistoryItems = props => {
  const {eachItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const onClickDeletItem = () => {
    deleteItem(id)
  }

  return (
    <div className="History-item">
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="social-media-icon" />
      <p>{title}</p>
      <p className="Domain-name">{domainUrl}</p>
      <div>
        <button data-testid="delete" onClick={onClickDeletItem} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </div>
  )
}

export default BrowserHistoryItems
