import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Time, Save Money</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deal for you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email ..." />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
