import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/219768545.jpg?k=f023b621f9296669f0d530f508131955f233e6ddd9be4eb400e44c02fc9b25d1&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/323018089.jpg?k=4d284a2ec5b57f1b17f17b8426e2c775115d29e44c19266eec06e2d8bdc1a51b&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/323018093.jpg?k=a23a2622404a7805500c54363d88b1d60694f4fded8e533f840cbeb45c6c13b3&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/287885824.jpg?k=0c4847f725853990d095f548f210a198ebd3a015c4a2c5b739af6319f4d3f960&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/228639079.jpg?k=52fa411dabbeb4d0bb4aa459a84011b99dbc6e27efc56a1fe65979d589e10627&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/228639014.jpg?k=df469b65482cd12b8d3309fd928d45bf6bd9ddf292970594869341f63a85a4da&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="slideWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or bookNow</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>273 South Bridge Road Singapore</span>
          </div>
          <span className="hotelDistance">
            Excelent location - 1200m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over Rp 350.000 at this property and get a free taxi
            airport
          </span>
          <div className="hotelImage">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  src={photo.src}
                  onClick={() => handleOpen(i)}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">Stay in the heart of singapore</h1>
              <p className="hotelDesc">
                ST Signature Chinatown terletak di kawasan Chinatown Singapura,
                400 meter dari Singapore City Gallery, 1,3 km dari Lau Pa Sat,
                dan 1,4 km dari Chinatown Heritage Centre. Fasilitas yang
                ditawarkan di akomodasi ini meliputi dapur bersama, lounge
                bersama, dan Wi-Fi gratis di seluruh areanya. Hotel ini memiliki
                kamar keluarga. Hotel ini menyediakan kamar-kamar ber-AC yang
                menawarkan meja, mesin kopi, brankas, TV layar datar, dan kamar
                mandi bersama dengan bidet. Di ST Signature Chinatown,
                kamar-kamarnya dilengkapi dengan seprai dan handuk. Anda dapat
                menikmati sarapan Asia di akomodasi. ST Signature Chinatown
                menawarkan teras. Kuil Sri Mariamman berjarak 1,5 km dari hotel,
                sedangkan Zouk Singapore berjarak 2,1 km. Ini adalah kawasan
                favorit tamu kami di Singapore, menurut ulasan independen.
                Pasangan paling suka lokasinya — mereka memberi nilai 9,0 untuk
                perjalanan dua orang. ST Signature Chinatown telah menyambut
                tamu Booking.com sejak 26 Jun 2019.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Keunggulan akomodasi </h1>
              <span>
                {" "}
                Terletak di jantung kota Singapore, hotel ini memiliki skor
                lokasi sempurna: 9,1{" "}
              </span>
              <h2>
                <b>Rp 350.000</b> (9 Nights){" "}
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
