import React, { useState } from "react";
import style from "./header.module.scss";
import SlidingMenu from "../slidingMenu";

function Header() {
  const [open, setOpen] = useState(true);

  const onChange = (isOpen) => {
    setOpen(isOpen);
  };

  return (
    <header className={style.HeaderContainer}>
      <div className={style.ContentContainer}>
        <h1>Alex portfolio</h1>
      </div>

      <SlidingMenu isOpen={open} onChange={onChange} />
    </header>
  );
}

export default Header;
