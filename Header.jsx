import React from "react";
import logo from "../assets/images/Header/Atoovislogo-white 2.png";
import logo2 from "../assets/images/Header/Atoovislogo.png";
import search from "../assets/images/Header/search.png";
import account from "../assets/images/Header/account.png";
import notify from "../assets/images/Header/notifications 2.png";
import Modal from "react-modal";
import "../styles/header.css";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword";
import Redirect from "./Auth/Redirect";
import ResetLink from "./Auth/ResetLink";
import { BiCart } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import NumberOtp from "./Auth/NumberOtp";
import EmailOtp from "./Auth/EmailOtp";
import { Link } from "react-router-dom";

const Header = () => {
  const auth = useSelector((state) => state.auth); //get state
  const { user, isLoading, error, access } = auth;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      borderRadius: "30px",
      padding: 40,
      transform: "translate(-50%, -50%)",
    },
  };
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(access ? false : true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="header">
        <div>
          <img src={logo} />
        </div>
        <div className="mid">
          <div className="search">
            <img src={search} alt="" />
            <input type="text" placeholder="Search Products" />
          </div>
          <button className="bts">Search</button>
        </div>
        <div className="left">
          {!access && (
            <div
              style={{ display: "flex", alignItems: "center", marginRight: 30 }}
              onClick={openModal}
            >
              <p>Sign In</p>
              <IoMdNotificationsOutline width={20} height={20} />
            </div>
          )}
          <Link to="cart">
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>My Cart</p>
              <BiCart width={20} height={20} />
            </div>
          </Link>
        </div>
      </div>
      <div className="mobile2">
        <div style={{ marginBottom: 20 }}>
          <img src={logo2} />
        </div>
        <div className="midd">
          <div className="search">
            <img src={search} alt="" />
            <input type="text" placeholder="Search Products" />
          </div>

          <div className="icons">
            <div className="icon">
              {" "}
              <BiCart style={{ width: 30, height: 40, color: "#1B5958" }} />
            </div>
            <div className="icon">
              {" "}
              <IoMdNotificationsOutline
                style={{ width: 30, height: 40, color: "#1B5958" }}
              />
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // className=" mode"
      >
        {/* <SignIn/> */}
        {/* <NumberOtp/> */}
        {/* <EmailOtp/> */}
        {/* <Redirect/> */}
        <ResetLink />
      </Modal>
    </div>
  );
};

export default Header;
