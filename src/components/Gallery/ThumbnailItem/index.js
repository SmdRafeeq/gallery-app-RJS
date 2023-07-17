import './index.css'

const ThumbnailItem = props => {
  const {imagesDetails, updateActiveId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesDetails

  const onclickButton = () => {
    updateActiveId(id)
  }

  const selectedClass = isActive ? '' : 'activate-img'

  return (
    <li>
      <button className="thumbnail-btn" type="button" onClick={onclickButton}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-images ${selectedClass}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
