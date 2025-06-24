import { createContext } from "react";
import { appTheme } from "../theme/appTheme";


type ThemeProviderProps = {
    children:React.ReactNode; //react components
}

export const ThemeContext = createContext(appTheme);

export const ThemeContextProvider = ({children}:ThemeProviderProps)=>{
   return(
   <ThemeContext.Provider value={appTheme}>
    {children}
    </ThemeContext.Provider>
   )
}