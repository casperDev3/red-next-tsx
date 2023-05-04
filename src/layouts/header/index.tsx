import React from "react";
import Link from "next/link";
// styles
import s from "./index.module.scss";
const Header = () => {
  return (
    <>
      <div className={s.header}>
        <h1>Header</h1>
        <Link href="/">Header</Link>
        <Link href="/about">About</Link>
      </div>
    </>
  );
};

export default Header;
