import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <div className="icon">

        
        <ul >
        <li>
            <Link href="/register">
            <a>ثبت نام </a>
            </Link>
          </li>
          <span> / </span>
          <li>
            <Link href="/login">
              <a>ورود </a>
            </Link>
          </li>
         
          
          
          </ul>
          <div className="shoping">
            <Link href="/#">
            <a >
              <Image src="/shopping-cart.png" width={20} height={20} /> سبد خرید{" "}
            </a></Link>
            
          </div>
        
        </div>
        <a href="">
          <Image src="/user-svgrepo-com (2).svg" width={50} height={50} />
        </a>

        <h1>
          <span>Music</span> Hooman{" "}
        </h1>
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
