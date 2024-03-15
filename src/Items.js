import './Items.css'

const Items = props => {
  const {listItem} = props
  const {name, imageUrl, description} = listItem

  return (
    <div className="bg">
      <img src={imageUrl} alt={`planet ${name}`} className="img"/>
      <h1 className="head1">{name}</h1>
      <div className="widthpara">
      <p>{description}</p>
      </div>
    </div>
  )
}

export default Items