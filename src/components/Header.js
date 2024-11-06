
import { useEffect, useState } from "react";
import Logo from "../assets/logo.jpeg"; // Correct import path if necessary

export const Header = () => {
  const[theme , setTheme]=useState(JSON.parse(localStorage.getItem("theme"))||"light")
  useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(theme))
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(theme)
  },[theme])
  return (
    <section>
      <div className="header">
        <img className="logo"src={Logo} alt="Taskmate Logo" />
        <span style={{marginTop:"10px",fontSize:"40px"}}>Taskmate</span>
     
      <div className="themeselector">
        <span onClick={()=>setTheme("dark")} className={theme==="dark"?"dark activetheme":"dark"}></span>
        <span onClick={()=>setTheme("light")}className={theme==="light"?"lght activetheme":"light"}></span>
        <span onClick={()=>setTheme("gone")}className={theme==="gone"?"gone activetheme":"gone"}></span>
        <span onClick={()=>setTheme("gtwo")}className={theme==="gtwo"?"gtwo activetheme":"gtwo"}></span>
        <span onClick={()=>setTheme("gthree")}className={theme==="gthree"?"gthree actvetheme":"gthree"}></span>
      </div>
      </div>
    </section>
  );
};

