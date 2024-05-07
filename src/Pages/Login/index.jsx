import React from "react";
import Header from "../../Components/Header";
import LoginForm from "../../Components/Login/LoginForm";
import Footer from "../../Components/Footer";

const index = () => {

  return (
    <>
        <Header />
        <section className="bgLogin">
        <LoginForm/>
        </section>
    </>
  );
};

export default index;
