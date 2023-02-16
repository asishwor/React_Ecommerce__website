import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Account from "./Account";
import SearchProd from "./SearchProd";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
  const onMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsMobileMenu(!isMobileMenu);
  };
  return (
    <>
      <header>
        <div className="header">
          {/* header top section  */}

          <div className="container">
            <div className="header__top">
              <div className="header__top-left">
                <div className="phone">
                  <div className="icon"></div>
                  <span>+00 123 4567</span>
                </div>
              </div>
              {/* mid header */}
              <div className="header__top-mid">
                <p>
                  <span>Get 50% off on selected items</span>|
                  <span>Shop now</span>
                </p>
              </div>
              {/* Right side of top header */}
              <div className="header__top-right">
                <div className="language">
                  <span>English</span>
                  <span></span>
                </div>
                <div className="location">
                  <span>Location</span>
                  <span></span>
                </div>
              </div>
            </div>
            {/* Header navigation and main header */}

            <nav
              className={
                isMobileMenu ? "header__bottom " : "header__bottom mobile"
              }
            >
              <Link to={"/"} className="header__bottom-logo">
                <img src="/images/logo.png" alt="" />
                <h1>ShopCart</h1>
              </Link>
              {/* Navlist  */}
              <ul
                className="header__bottom-navlist"
                onClick={() => setIsMobileMenu(!isMobileMenu)}
              >
                <li>
                  <NavLink to="">Catagories </NavLink>
                  <ul>
                    <li>
                      <Link to={"/catagory/smartphones"}>Mobiles</Link>
                    </li>
                    <li>
                      <Link to={"/catagory/laptops"}>Laptops</Link>
                    </li>
                    <li>
                      <Link to={"/catagory/fragrances"}>Perfume</Link>
                    </li>
                    <li>
                      <Link to={"/"}></Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="">Deaks</NavLink>
                </li>
                <li>
                  <NavLink to="">What's new</NavLink>
                </li>
                <li>
                  <NavLink to="">Delivery</NavLink>
                </li>
                <li>
                  <NavLink to="/cart">Cart</NavLink>
                  <ul>
                    <li>
                      <NavLink to="/wishlist">Wishlist</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* search prod  */}
              <SearchProd />
              {/* Account And cart */}
              <div className="header__bottom-right">
                <Account />
              </div>
            </nav>

            {/* Mobile Menu */}
            <div className="mobile__menu">
              <Link to={"/"} className="header__bottom-logo">
                <img src="/images/logo.png" alt="" />
                <h1>ShopCart</h1>
              </Link>
              <div onClick={(e) => onMenu(e)}>
                <span className={isMobileMenu ? "active" : ""}></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;