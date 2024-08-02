import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

export default function Navbar() {
  return (
    <div className={styles.container}>
      Navbar
      <div className={styles.social}>
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
      </div>
      <div className={styles.logo}>Russ Madrigal</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Inicio</Link>
        <Link href="/">Acerca</Link>
        <Link href="/">Contacto</Link>
        <AuthLinks />

      </div>
    </div>
  );
}
