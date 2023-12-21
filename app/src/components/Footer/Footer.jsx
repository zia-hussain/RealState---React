import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="innerWidth paddings f-container">
        {/* Left Side  */}

        <div className="flexColStart paddings f-left">
          <img width={120} src="../../../public/logo2.png" alt="" />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* Right Side  */}

        <div className="flexColStart paddings f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>

          <div className="flexCenter menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
