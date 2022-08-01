import React from "react";
import { DiningOutData } from "../../Data/DiningOutData";
import Collections from "../common/Collections/Collections";
import ExploreSection from "../common/ExploreSection/ExploreSection";
import Filter from "../common/filters/Filter";
import "./DiningOut.css"


const collectionList = [
  {
    id: 1,
    title: "Newly Opened",
    cover: "https://b.zmtcdn.com/data/collections/031c2dd47d839ff2bf98dbb66147ab4f_1648708839.jpg",
    places: "11 Places"
  },
  {
    id: 2,
    title: "Trending This Week",
    cover: "https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040546.png",
    places: "30 Places"
  },
  {
    id: 3,
    title: "Best of Bengaluru",
    cover: "https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg",
    places: "113 Places"
  },
  {
    id: 4,
    title: "Microbreweries",
    cover: "https://b.zmtcdn.com/data/collections/f29fa95355a78edb148d737d12bd9ef0_1647256377.jpg",
    places: "29 Places"
  },
  {
    id: 5,
    title: "Best Pizza Places in Town",
    cover: "https://b.zmtcdn.com/data/collections/f6e7f7d903d6499e1420d755ddc0ab11_1647253868.jpg",
    places: "29 Places"
  },
  {
    id: 6,
    title: "Brilliant Biryanis",
    cover: "	https://b.zmtcdn.com/data/collections/121c28675e83cd77ae12f5904580f241_1647256967.jpg",
    places: "28 Places"
  },
  {
    id: 7,
    title: "Darshini",
    cover: "	https://b.zmtcdn.com/data/collections/3ec0a1d41a727287821715478cb6ee2b_1633438403.jpg",
    places: "29 Places"
  },
  {
    id: 8,
    title: "Flavours of Punjab",
    cover: "https://b.zmtcdn.com/data/collections/81d955a89e9530661ed96b0373dcbe9f_1647258270.jpg",
    places: "29 Places"
  },
];

const diningFilters = [
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
    title: "Outdoor Seating",

  },
  {
    id: 4,
    title: "Serves Alcohol"
  },
  {
    id: 5,
    title: "Open Now"
  }
];

const DiningListData = DiningOutData;

const DiningOut = () => {
  return (
    <div>
      <Collections collectionList={collectionList} />
      <div className="max-width">
        <Filter filtersList={diningFilters} />
      </div>
      <ExploreSection list={DiningListData} collectionName="Best Dining Restaurants near you in BTM" />
    </div>
  )
}

export default DiningOut;