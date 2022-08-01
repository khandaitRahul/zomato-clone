import React from "react";
import { NightLifeData } from "../../Data/NightLifeData";
import Collections from "../common/Collections/Collections";
import ExploreSection from "../common/ExploreSection/ExploreSection";
import Filter from "../common/filters/Filter";
import "./NightLife.css"

const collectionList = [
  {
    id: 1,
    title: "Microbreweries",
    cover: "https://b.zmtcdn.com/data/collections/f29fa95355a78edb148d737d12bd9ef0_1647256377.jpg",
    places: "29 Places"
  },
  {
    id: 2,
    title: "Best Bars & Pubs",
    cover: "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "30 Places"
  }
]

const NightFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters"
  },
  {
    id: 2,
    title: "Distance",
    icon: <i className="fi fi-rr-sort-alt absolute-center"></i>
  },
  {
    id: 3,
    title: "Rating: 4.0+ "
  },
  {
    id: 4,
    title: "Pubs & Bars"
  }
]

const NightListData = NightLifeData;

const NightLife = () => {
  return (
    <div>
      <Collections collectionList={collectionList} />
      <div className="max-width">
        <Filter filtersList={NightFilters} />
      </div>
      <ExploreSection list={NightListData} collectionName="Nightlife Restaurants in BTM" />
    </div>
  )
}

export default NightLife;