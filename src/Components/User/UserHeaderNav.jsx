import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Statics from "../../assets/estatisticas.svg";
import MyPhotos from "../../assets/feed.svg";
import Add from "../../assets/adicionar.svg";
import Logout from "../../assets/sair.svg";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const {pathname} = useLocation()
  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`buttonAccountMobile ${mobileMenu ? "active" : ""}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? "navMobile" : "grid grid-cols-4 gap-4"} ${
          mobileMenu && "navMobileActive"
        }`}
      >
        <NavLink to="/conta" end className="buttonAccount">
          <MyPhotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas" className="buttonAccount">
          <Statics />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar" className="buttonAccount">
          <Add />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout} className="buttonAccount">
          <Logout />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
