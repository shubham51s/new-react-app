import React, { useState } from "react";

function Homepage() {
  const [theme, setTheme] = useState(localStorage.getItem("currentTheme") || "dark-theme");

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";

    setTheme(newTheme);
    localStorage.setItem("currentTheme", newTheme);
  };

  return (
    <div className={`flex items-center justify-center w-screen h-screen gap-4 bg-1 ${theme}`}>
      <div className="font-bold text-color-1">Homepage</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Homepage;
