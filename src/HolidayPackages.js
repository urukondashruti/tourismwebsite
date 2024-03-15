import Slider from 'react-slick'

import Items from './Items'

import './HolidayPackages.css'

const HolidayPackages = props => {
  const {list1,text} = props

  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <div className="background" data-testid="planets">
      <h1>{text.word}</h1>
      <div>
        <Slider {...settings}>
          {list1.map(each => (
            <Items key={each.id} listItem={each} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default HolidayPackages