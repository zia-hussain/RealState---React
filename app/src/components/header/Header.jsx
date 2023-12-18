import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div
        className="flexCenter paddings innerWidth h-container"
        style={{ justifyContent: "space-between" }}
      >
        <img src="../../../public/logo.png" alt="" width={100} />

        <div className="flexCenter h-menu">
          <a href="">Residencies</a>
          <a href="">OurValue</a>
          <a href="">contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
