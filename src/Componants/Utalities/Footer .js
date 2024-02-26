import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area bg-f">
      <div className="containeer mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          <div className="foot">
            <h3 className="">About Us</h3>
            <p className="">
              Integer cursus scelerisque ipsum id efficitur. Donec a dui
              fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac
              lectus a interdum. Vivamus semper posuere dui, at ornare turpis
              ultrices sit amet. Nulla cursus lorem ut nisi porta, ac eleifend
              arcu ultrices.
            </p>
          </div>
          <div className="foot">
            <h3 className="">Opening hours</h3>
            <p>
              <span className="text-color">Monday: </span>Closed
            </p>
            <p>
              <span className="text-color">Tue-Wed :</span> 9:Am - 10PM
            </p>
            <p>
              <span className="text-color">Thu-Fri :</span> 9:Am - 10PM
            </p>
            <p>
              <span className="text-color">Sat-Sun :</span> 5:PM - 10PM
            </p>
          </div>
          <div className="foot">
            <h3 className="">Contact information</h3>
            <p className="text-lg lead">
              Ipsum Street, Lorem Tower, MO, Columbia, 508000
            </p>
            <p className="text-lg lead">
              <a href="tel:+0120008009999">+01 2000 800 9999</a>
            </p>
            <p>
              <a href="mailto:info@admin.com">info@admin.com</a>
            </p>
          </div>
          <div className="foot">
            <h3 className="text-xl font-semibold">Subscribe</h3>
            <div className="subscribe_form">
              <form className="subscribe_form">
                <input
                  name="EMAIL"
                  id="subs-email"
                  className="form_input mr-2 py-1 px-3 rounded-md border border-gray-300"
                  placeholder="Email Address..."
                  type="email"
                />
                <button
                  type="submit"
                  className="submit "
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
            <ul className="list-inline mt-4 f-social">
              <li className="list-inline-item">
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i class="fa-brands fa-google-plus-g"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" text-white py-4 copyright">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-sm">
              &copy; 2020 All Rights Reserved.{" "}
              <a href="#" className="text-blue-300">
                Yamifood Restaurant
              </a>{" "}
              Design By:{" "}
              <a href="#" className="text-blue-300">
                HASSAN(ELAomery)
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
