import React from "react";
import "./homeAbout.css";
import store from "../../assets/Store.jpg";

export const HomeAbout = () => {
  return (
    <div className="ha_container">
      <div className="ha_background">
        <div className="ha_content">
          <h1>Heaven In A Jar</h1>
          <p>Your one stop shop to satisfy all your sweet cravings</p>
          {/* Add more content/information here */}
          <div className="ha_info">
            <a
              href="https://www.google.com/maps/place/Heaven+In+a+Jar,+Desserts/@29.5933171,-95.6065593,20.25z/data=!4m6!3m5!1s0x8640e689a88b50d7:0x8e6660d5b8afacaa!8m2!3d29.5934001!4d-95.6062062!16s%2Fg%2F11f55nl3fn?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:text-blue-400 hover:underline transition-all">
                3159 B Hwy 6 Sugar Land, TX
              </p>
            </a>
            <p>Made with love, care, and attention to detail</p>
            <p>Your local, family owned business since 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};
