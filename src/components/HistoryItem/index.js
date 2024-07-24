import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const Delete = () => {
    onDelete(id)
  }
  return (
    <li className='list-item'>
      <p className='time'>{timeAccessed}</p>
      <div className='history-item'>
        <div className='history-content'>
          <img src={logoUrl} alt='domain logo' className='logo' />
          <div className='text-content'>
            <p className='title'>{title}</p>
            <p className='domain'>{domainUrl}</p>
          </div>
        </div>
        <button
          type='button'
          data-testid='delete'
          className='delete-button'
          onClick={Delete}
        >
          <img
            src='https://assets.ccbp.in/frontend/react-js/delete-img.png'
            className='delete-icon'
            alt='delete'
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
