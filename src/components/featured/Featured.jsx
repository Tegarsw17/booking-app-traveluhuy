import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o="
          className="featuredImg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>111 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690329.webp?k=330403cfa8e49ee98d01a4808f169d520e49f24348154b8cb7f637497015802f&o="
          className="featuredImg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>205 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689874.webp?k=5a29b0d987e962b9ce2c78ae5dae52d02fb2ed959b1e2b00faf022306e103f8b&o="
          className="featuredImg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>97 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
