import Featured from "../../components/featured/Featured";
import FeaturedPropertie from "../../components/featuredPropertie/FeaturedPropertie";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by propety type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Guest Love</h1>
        <FeaturedPropertie />
        <MailList />
      </div>
    </div>
  );
};

export default Home;
