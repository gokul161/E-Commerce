import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Mobile Shop | E-Commerce Project</h2>
      <p>
        &copy; <span>{year}</span> MobileShop.com - All Rights Copyright
      </p>
    </footer>
  );
}
