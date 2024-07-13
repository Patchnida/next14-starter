"use client"

import { useState } from "react";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
import Image from "next/image";

const links = [
    {
        title:"Homepage",
        path:"/",
    },
    {
        title:"About",
        path:"/about",
    },
    {
        title:"Contact",
        path:"/contact",
    },
    {
        title:"Blog",
        path:"/blog",
    }
]

const Links = () => {

    const [open, setOpen] = useState(false);

    //Temporary
    const session = true
    const isAdmin = true

  return (
    <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link=>(
                <NavLink item={link} key={link.title}/>
            )))}
            {
                // session = ตรวจสอบว่ากำลัง login  -> ถ้าเป็น true ตรวจสอบต่อว่า isAdmin (เป็น Admin รึเปล่า)
                session ? (
                    <>
                        {
                            isAdmin && 
                                <NavLink item={{title:"Admin", path:"/admin"}}/>
                            }
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{title:"Login", path:"/login"}}/>
                )
            }
        </div>
        {/* <button className={styles.menuButton} onClick={() => setOpen((prev)=> !prev)}>Menu</button> */}
        <Image 
            src="/menu.png" 
            alt="" 
            width={30} 
            height={30} 
            onClick={() => setOpen((prev)=> !prev)} 
            className={styles.menuButton}
        />
        {
            open && <div className={styles.mobileLinks}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title}/>
                ))}
            </div>
        }
    </div>
  )
}

export default Links;