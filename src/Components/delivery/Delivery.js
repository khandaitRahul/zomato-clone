import React from 'react'
import { restaurants } from '../../Data/Restaurants';
import ExploreSection from '../common/ExploreSection/ExploreSection';
import Filter from '../common/filters/Filter';
import "./Delivery.css"
import DeliveryCollections from './deliveryCollections/DeliveryCollections';
import TopBrands from './TopBrands/TopBrands';

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters"
  },
  {
    id: 2,
    title: "Rating: 4.0+ "
  },
  {
    id: 3,
    title: "Safe and Hygienic",

  },
  {
    id: 4,
    title: "Pure veg"
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-sort-alt absolute-center"></i>
  },
  {
    id: 6,
    title: "Great Offers"
  }
];


const restaurantList = restaurants;


const Delivery = () => {
  return (
    <>
      <div className='max-width'>
        <Filter filtersList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection list={restaurantList} collectionName="Delivery Restaurants in Bangalore" />
    </>

  )
}

export default Delivery;