import { useState } from "react"
import { LanguageContext } from "./LanguageContext";

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState();
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
