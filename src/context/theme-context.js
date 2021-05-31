import React, { useState} from "react";

export const THEME_DEFAULT_VALUE = {
    hasHeader:true,
    setHasHeader: () => { },

}
export const ThemeContext = React.createContext(THEME_DEFAULT_VALUE);

export const useTheme = () => {
  const [hasHeader,setHasHeader] = useState(true);

  return {
      hasHeader,
      setHasHeader
  };

};
