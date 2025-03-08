import { createContext, ReactNode, useContext, useState } from "react";

interface LanguageContextType {
    english: boolean;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [english, setEnglish] = useState(false);

    const toggleLanguage = () => setEnglish((prev) => !prev)

    return (<LanguageContext.Provider value={{ english, toggleLanguage }}>{children}</LanguageContext.Provider>);
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    return context;

}