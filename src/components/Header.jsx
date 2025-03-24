import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'


const Header = ({text="Review App"}) => {
    const {theme, changeTheme} = useContext(ThemeContext);

    const headStyle = {
      backgroundColor: theme === "light" ? "#3498db" : "#2c3e50",
      color: theme === "light" ? "#ffffff" : "#ecf0f1",
    }

    const buttonStyle = {
      padding: "8px 12px",
      backgroundColor: theme === "light" ? "#2c3e50" : "#f39c12",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginLeft: "20px"
  };

  return (
    <header style= {headStyle}>
            <div className='container'>
                <h1>{text}</h1>
                <button onClick={changeTheme} style={buttonStyle}>
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>
            </div>
            

    </header>
  )
}

export default Header