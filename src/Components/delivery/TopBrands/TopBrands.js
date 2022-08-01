import React from 'react'
import Slider from 'react-slick'
import NextArrow from '../../common/Carousel/NextArrow'
import PrevArrow from '../../common/Carousel/PrevArrow'
import "./TopBrands.css"

const topBrandList = [
  {
    id: 1,
    time: "30 min",
    title: "Domino's Pizza",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp"
  },
  {
    id: 2,
    time: "28 min",
    title: "Meghana Foods",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp",
  },
  {
    id: 3,
    time: "36 min",
    title: "Empire Restaurant",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
  },
  {
    id: 4,
    time: "19 min",
    title: "A2B - Adyar Ananda Bhavan",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp",
  },
  {
    id: 5,
    time: "17 min",
    title: "McDonald's",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp",
  },
  {
    id: 6,
    time: "20 min",
    title: "KFC",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
  },
  {
    id: 7,
    time: "34 min",
    title: "Leon Grill",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/526e7511008f07f7d630549c7c5809b1_1638685733.png?output-format=webp",
  },
  {
    id: 8,
    time: "33 min",
    title: "Burger King",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
  },
  {
    id: 9,
    time: "23 min",
    title: "Pizza Hut",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png?output-format=webp",
  },
  {
    id: 10,
    time: "23 min",
    title: "Shanmukha",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6ded08836f89bae521e5a44fabc6fabd_1611119986.png?output-format=webp",
  }
]

// React slick slider
const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}


const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandList.map((brand) => {
          return (
            <div>
              <div className="top-brands-cover">
                <img src={brand.cover} className="top-brands-img" alt={brand.title} />
              </div>
              <div className="top-brands-title">{brand.title}</div>
              <div className="top-brands-time">{brand.time}</div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default TopBrands;