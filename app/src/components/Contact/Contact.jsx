import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { MdVideoCall } from "react-icons/md";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            <div className="flexStart row">
                {/* First Row & First Mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={20} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span>021 234 567 45</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* Second Mode */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={20} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span>021 234 567 45</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>

            </div>

            {/* Second Mode  & First Row*/}

            <div className="flexStart row">
                {/* Second Row & First Mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                  <MdVideoCall size={20} />

                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span>021 234 567 45</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* Second Mode */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={20} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span>021 234 567 45</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>

            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img src="../../../public/contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
