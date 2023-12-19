import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container" style={{justifyContent:"space-between"}}>
        <img src="../../../public/prologis.png" alt="" />
        <img src="../../../public/tower.png" alt="" />
        <img src="../../../public/equinix.png" alt="" />
        <img src="../../../public/realty.png" alt="" />
      </div>
    </section>
  );
};

export default Companies;
