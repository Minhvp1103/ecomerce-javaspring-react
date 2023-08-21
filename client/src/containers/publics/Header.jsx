import React from "react";
import { Logo } from "../../assets";
import { Button } from "../../components";
import icons from "../../utils/icons";
import headerLink from "../../utils/header";
import { Link } from "react-router-dom";

const { AiOutlinePlusCircle } = icons;

const Header = () => {
  return (
    <div className="w-1100 flex items-center justify-between border border-red-500">
      <img
        src={Logo}
        alt="logo"
        className="w-[240px] h-[70px] object-contain"
      />
      <div className="flex items-center gap-5">
        {headerLink &&
          headerLink.map((li) => (
            <Link className="flex items-center gap-1" key={li.id} to={li.path}>
              <i className="text-[18px]">{li.icon}</i>
              <p className="text-[16px] hover:underline">{li.desc}</p>
            </Link>
          ))}
        <Button
          text={"Đăng Tin Mới"}
          textColor={"text-white"}
          bgColor={"bg-secondary2"}
          icon={<AiOutlinePlusCircle />}
        />
      </div>
    </div>
  );
};

export default Header;
