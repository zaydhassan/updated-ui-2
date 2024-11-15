import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { MdLightMode, MdDarkMode, MdPublic, MdMap } from 'react-icons/md'; 

const Header = ({ toggleViewMode, viewMode }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <img src="/Polysia.png" alt="Logo" className="logo" />
      <span className="title">THREATMAP LIVE ATTACK</span>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'dark' ? <MdLightMode size={28} /> : <MdDarkMode size={28} />}
      </button>
      <button onClick={toggleViewMode} className="theme-toggle" style={{ marginLeft: '-85px' }}>
        {viewMode === 'plane' ? <MdPublic size={28} /> : <MdMap size={28} />}
      </button>
    </div>
  );
};

export default Header;
