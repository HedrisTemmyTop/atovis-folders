import React from "react";
import "../../styles/auth/signin.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { registerBuyer, sendOtp } from "../../slices/buyerSlice";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  //   const auth = useSelector((state) => state.auth); //get state
  const buyer = useSelector((state) => state.buyers); //Get buyer state from redux
  const dispatch = useDispatch(); // call to action
  const navigate = useNavigate();

  //   const { user, isLoading, error } = auth;
  const [fullname, setFullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setnumber] = useState("");
  useEffect(() => {
    if (buyer.registered) navigate("/sign-in");
  }, [buyer.registered]);
  const handlePasswordChange = (e) => {
    setFullname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setemail(e.target.value);
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNumberChange = (e) => {
    setnumber(e.target.value);
  };

  const onSignUpSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      email: email,
      password: password,
      fullname: fullname,
      number: number,
    };
    if (email.trim() === "" || password.trim() === "") {
      setErr("email or passsword cannot be empty");
    } else {
      //   dispatch(login(formValues));
      dispatch(sendOtp({ number: number }));
      //   dispatch(registerBuyer(formValues));

      console.log(formValues);
    }
  };
  //   console.log("auth", user, error, isLoading);

  return (
    <div className="sign">
      <div className="wel">
        <h1> Sign Up</h1>
        <p>Create an account and get upto 50% on selected products</p>
      </div>
      <form action="" onSubmit={onSignUpSubmit}>
        <div className="signin">
          <div className="new">
            <label htmlFor="">Email Address</label>
            <input type="text" onChange={handleEmailChange} />
          </div>
          <div className="new2">
            <label htmlFor="">Phone Number</label>
            <input type="number" onChange={handleNumberChange} />
          </div>
          <div className="new2">
            <label htmlFor="">Full name</label>
            <input type="text" onChange={handleFullnameChange} />
          </div>
          <div className="new3">
            <label htmlFor="">Password</label>
            <input type="password" onChange={handlePassChange} />
          </div>
        </div>

        <button className="btn1" disabled={buyer.isLoading}>
          {buyer.isLoading ? "Connecting..." : "Sign upn"}
        </button>
        <div className="or">
          <p>OR</p>
        </div>
        <button className="btn2">
          <img src="" alt="" />
          <p>Sign in with google</p>
        </button>
      </form>
      <div className="account">
        <p>
          Already have an account?<a href="">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
