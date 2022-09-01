import React from "react";
import { LanguageContext } from "./LanguageContext";

const lang = {
    en : {
        CURRENT_LANG : 'English language'
    },
    
    it : {
        CURRENT_LANG : 'Lingua Italiana'
    }

}

export class DisplayLanguage extends React.Component{


    render(){
        return (
            <>
                <LanguageContext.Consumer>
                    {(language) => {
                        return <h1>{lang[language].CURRENT_LANG} ( key: {language } )</h1>
                    }}
                </LanguageContext.Consumer>
            </>
        )
    }
}