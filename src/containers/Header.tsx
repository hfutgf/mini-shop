import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";
import profile from "assets/images/profile.png";
import basket from "assets/svg/basket.svg";
import favourite from "assets/svg/favourite.svg";
import Search from "components/Search";

const Header: FC = () => {
  const [user, setUser] = useState(true);
  const [login, setLogin] = useState(true);

  return (
    <div className="bg-light">
      <div className="container mx-auto h-[72px] flex flex-col justify-center ">
        <div className="flex items-center justify-between  ">
          <Link to={"/"}>
            <img src={logo} alt="logo" width={128} height={128} />
          </Link>
          <div className="flex items-center gap-[72px]">
            <Search />
            <div className="flex items-center gap-[16px]">
              {user && (
                <Link to={"/basket"}>
                  <img src={basket} alt="basket" width={32} height={32} />
                </Link>
              )}
              {user && (
                <Link to={"/favourite"}>
                  <img src={favourite} alt="basket" width={32} height={32} />
                </Link>
              )}
              {login ? (
                <Link to={"/profile"}>
                  <img src={profile} alt="profile" width={32} height={32} />
                </Link>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
