import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
export default function Navbar() {
  const { user, login } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="container">
      <nav>
        <div className="icon">
          <ul>
            <li onClick={login} className="btn">
              ورود به حساب
            </li>
          </ul>
          {/* <div className="shoping ">
            <Link href="/#">
              <a>
                <Image src="/shopping-cart.png" width={20} height={20} /> سبد
                خرید{" "}
              </a>
            </Link>
          </div> */}
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
              <a>خانه</a>
            </Link>
          </li>
          <li>
            <Link href="/guides">
              <a>چخبر</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
