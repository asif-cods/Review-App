import {Children, createContext, useEffect, useState } from "react";


const ThemeContext = createContext();  //create context and inside this have provider method, it give ThemeContext.provider


export  const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("light");

    const changeTheme = ()=>{
     setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));

    };

    //  call provider method and import FeedbackProvider in main.js at top level
      return (
        <ThemeContext.Provider value={{
          theme,
          changeTheme
          }}>
            {children}

        </ThemeContext.Provider>

      )
}

// exporting FeedbackTheme for using values of it 
export default ThemeContext