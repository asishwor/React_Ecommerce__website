import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          {/* widget --1 */}
          <div className="footer__w1">
            <div className="footer__logo">
              <img src="/images/logo.png" alt="" />
              <h2>ShopCart</h2>
            </div>
            <p className="footer__about">
              E-commerce has evolved over the past few years and since it’s
              easier and more convenient, it is evident that customers are
              actually switching to the trend of online shopping.
            </p>
            <div className="footer__payment">
              <div className="payment__title">
                <h3>Accepted Payment</h3>
                <div className="payment__methods">
                  <img src="/images/gpay.png" alt="" />
                  <img src="/images/master.png" alt="" />
                  <img src="/images/visa.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* widget -- 3 */}
          <div className="footer__w3">
            <div className="footer__w2-title">
              <h3>About Us</h3>
            </div>
            <ul className="footer__w2-list">
              <li>
                <Link to={"/"}>About Shopcart</Link>
              </li>
              <li>
                <Link to={"/"}>Careers</Link>
              </li>
              <li>
                <Link to={"/"}>News & Blogs</Link>
              </li>
              <li>
                <Link to={"/"}>Help</Link>
              </li>
              <li>
                <Link to={"/"}>Press Center</Link>
              </li>
              <li>
                <Link to={"/"}>Shop by Location</Link>
              </li>
              <li>
                <Link to={"/"}>Shopcart brands</Link>
              </li>
              <li>
                <Link to={"/"}>Affiliate & Partners</Link>
              </li>
              <li>
                <Link to={"/"}>Ideas & Guides</Link>
              </li>
            </ul>
          </div>
          {/* widget -- 2 */}
          <div className="footer__w2">
            <div className="footer__w2-title">
              <h3>Department</h3>
            </div>
            <ul className="footer__w2-list">
              <li>
                <Link to={"/"}>Fashion</Link>
              </li>
              <li>
                <Link to={"/"}>Educational Products</Link>
              </li>
              <li>
                <Link to={"/"}>Frozen Food</Link>
              </li>
              <li>
                <Link to={"/"}>Mobile</Link>
              </li>
              <li>
                <Link to={"/"}>Laptop</Link>
              </li>
              <li>
                <Link to={"/"}>Accessories</Link>
              </li>
            </ul>
          </div>

          {/* widget -- 4 */}
          <div className="footer__w4">
            <div className="footer__w2-title">
              <h3>About Us</h3>
            </div>
            <ul className="footer__w2-list">
              <li>
                <Link to={"/"}>Services</Link>
              </li>
              <li>
                <Link to={"/"}>Gift Cards</Link>
              </li>
              <li>
                <Link to={"/"}>Mobile App</Link>
              </li>
              <li>
                <Link to={"/"}>Shipping & Delivery</Link>
              </li>
              <li>
                <Link to={"/"}>Order Pickup</Link>
              </li>
              <li>
                <Link to={"/"}>Shop by Location</Link>
              </li>
              <li>
                <Link to={"/"}>Account Signup</Link>
              </li>
            </ul>
          </div>
          {/* widget -- 5 */}
          <div className="footer__w5">
            <div className="footer__w2-title">
              <h3>Help</h3>
            </div>
            <ul className="footer__w2-list">
              <li>
                <Link to={"/"}>Shopcart help</Link>
              </li>
              <li>
                <Link to={"/"}>Returns</Link>
              </li>
              <li>
                <Link to={"/"}>Track orders</Link>
              </li>
              <li>
                <Link to={"/"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"/"}>Feedback Center</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
