import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { TopNavBox, Button } from "./TopNav.styled";
import { SearchInput } from "../searchInput";

import logo from "../../img/logo2.png";

const TopNav = ({ addInput, keyword }) => {
  const nav = useNavigate();

  const [color, setColor] = useState("rgb(200, 200, 200)");
  const [link, setLink] = useState("/login");
  const [text, setText] = useState("로그인");

  const isLogin = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    if (isLogin == true) {
      setColor("#6699CC");
      setLink("/mypage");
      setText("마이페이지");
    }
  });
  function moveToMyNft() {
    nav("/mynft");
  }

  return (
    <div>
      <TopNavBox>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>


        <div className="btns">
          <Button onClick={moveToMyNft} color={color}>
            MyNFT
          </Button>
        </div>
      </TopNavBox>
    </div>
  );
};

export { TopNav };
