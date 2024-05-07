import React from "react";
import Header from "../../Components/Header";
import UserHeader from "../../Components/User/UserHeader";
import Feed from "../../Components/Feed/Feed";
import { useContext } from "react";
import { UserContext } from "../../UserContext"
import Head from "../../Components/Helper/Head";

const index = () => {

  const { data } = useContext(UserContext)
  return (
    <>
      <Head title="Minha conta"/>
      <Header />
      <UserHeader />
      <div className="container">
        <Feed className="container" user={data.id}/>
      </div>
    </>
  );
};

export default index;
