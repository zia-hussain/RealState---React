import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion.jsx";

const Value = () => {
  const [expandedItems, setExpandedItems] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const handleAccordionChange = (items) => {
    setExpandedItems(items);
  };
  const handleExpandedClass = (id) => {
    if (expandedId) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="../../../public/value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.{" "}
            <br />
            We believe a good place to live can make your life better
          </span>

          <Accordion
            allowZeroExpanded
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={expandedItems}
            onChange={handleAccordionChange}
          >
            {data.map((item, i) => (
              <AccordionItem
                className={`accordionItem ${
                  expandedId === i + 1 && "expanded"
                }`}
                key={i}
              >
                <AccordionItemHeading
                  onClick={() => handleExpandedClass(i + 1)}
                >
                  <AccordionItemButton className="accordionButton">
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
