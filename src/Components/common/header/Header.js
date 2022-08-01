import React from "react"
import "./Header.css"

const Header = () => {
  return (
    <div className="max-width header">
      {/* header-left (brand-logo-section) */}
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="brand-logo"
        className="header-logo" />

      {/* header-right (center-section) */}
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              {/* <i className="fi fi-br-marker "></i> */}
              <i className="fi fi-sr-marker absolute-center location-icon"></i>
              <div>Bangalore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i className="absolute-center search-icon fi fi-rr-search"></i>
            <input placeholder="Search for restaurant, cuisine or a dish" className="search-input" />
          </div>
        </div>

        {/* header-right (right-section) */}
        <div className="profile-wrapper">
          <img src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
            alt="profile-img" className="header-profile-img" />
          <div className="header-username">Rahul</div>
          <i className="absolute-center profile-options-icon fi fi-rr-angle-small-down"></i>
        </div>
      </div>
    </div>
  )
}

export default Header;