import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext"
export default function Navbar() {
  const user = useContext(AuthContext);
  console.log(user)
  return (
    <div className="container">
      <nav>
        <div className="icon">
          <ul>
            <li>
              <Link href="/login">
                <a> ورود به حساب </a>
              </Link>
            </li>
          </ul>
          <div className="shoping">
            <Link href="/#">
              <a>
                <Image src="/shopping-cart.png" width={20} height={20} /> سبد
                خرید{" "}
              </a>
            </Link>
          </div>
        </div>
        <a href="">
          <Image src="/user-svgrepo-com (2).svg" width={50} height={50} />
        </a>
        <Link href="/">
          <h1 className="label">
            <span>Music</span> Hooman{" "}
          </h1>
        </Link>
      </nav>
      <nav className="nav-2">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/guides">
              <a>Guides</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
