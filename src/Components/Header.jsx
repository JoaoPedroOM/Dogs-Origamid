import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/dogs.svg";
import Usuario from "../assets/usuario.svg";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className="shadow z-50 w-full fixed bg-white top-0">
      <nav className="flex items-center justify-between h-16 container text-custom-black hover:text-black">
        <Link to="/">
          <Logo/>
        </Link>
        {data ? (
          <Link to="/conta" className="flex justify-center items-center gap-2">
            <span>{data.nome}</span>
            <Usuario />
          </Link>
        ) : (
          <Link to="/login" className="flex justify-center items-center gap-2">
            <span>Logar / Criar</span>
            <Usuario/>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
