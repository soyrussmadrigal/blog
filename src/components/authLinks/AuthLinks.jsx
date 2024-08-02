import styles from "./authLinks.module.css";
import Link from "next/link";

export default function AuthLinks() {
  // Temoary code
  const status = "notauthenicated";
  return (
    <>
      {status === "notauthenicated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Escribir</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
}
