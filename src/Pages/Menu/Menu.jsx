import Navbar from "../../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { database, ref, onValue } from "../../firebase";
import "./Menu.css";

const Menu = () => {
  const [menuData, setMenuData] = useState({});

  useEffect(() => {
    const menuRef = ref(database, "menuItems");
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      setMenuData(data || {});
    });
  }, []);
  return (
    <div>
      <Navbar />
      <main className="bg-[#FFEDD8]">
        <div className="menu-container">
          {Object.keys(menuData).map((category) => (
            <div key={category} className="menu-category">
              <h2 className="category-title text-3xl">
                {category.toUpperCase()}
              </h2>
              <div className="menu-items">
                {Object.keys(menuData[category]).map((itemKey) => {
                  const item = menuData[category][itemKey];
                  return (
                    <div key={itemKey} className="menu-card">
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="menu-image"
                        />
                      )}
                      <h3 className="menu-item-title">{item.name}</h3>
                      <p className="menu-description">{item.description}</p>
                      {category.toLowerCase() === "shakes" ? (
                        <p className="menu-prices">
                          16oz: ${item.prices?.["16oz"] || "N/A"} | 24oz: $
                          {item.prices?.["24oz"] || "N/A"}
                        </p>
                      ) : (
                        <p className="menu-prices">
                          8oz: ${item.prices?.["8oz"] || "N/A"} | 16oz: $
                          {item.prices?.["16oz"] || "N/A"}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
