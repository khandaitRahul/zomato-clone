import React, { useState } from 'react'
import Footer from '../../Components/common/footer/Footer';
import Header from '../../Components/common/header/Header';
import TabOption from '../../Components/common/tabOptions/TabOption';
import Delivery from '../../Components/delivery/Delivery';
import DiningOut from '../../Components/diningOut/DiningOut';
import NightLife from '../../Components/nightLife/NightLife';


function HomePage() {

  const [activeTab, setActiveTab] = useState("Delivery")

  return (
    <div>
      <Header />
      <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  )
}

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />
    case "Dining Out":
      return <DiningOut />
    case "NightLife":
      return <NightLife />
    default:
      return <Delivery />
  }
}



export default HomePage;