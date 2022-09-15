import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/216187656.webp?k=9ccb7d42c0a7c3d834ee0725d2f3203406ee153d6f5194bbb0c5d3d8e6e43ee6&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">ST Signature Chinatown</h1>
        <span className="siDistance">1200m from center</span>
        <span className="siTaxiOp">Free Airport Taxe</span>
        <span className="siSubtitle">
          Studio Apartment with air conditioning
        </span>
        <span className="siFeatures">
          Entire Studio • 1 Bathroom • 21 m² 1 full bed
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailText">
          <span className="siPrice">Rp 350.000</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See Availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
