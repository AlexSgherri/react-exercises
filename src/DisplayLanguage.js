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
                        return <div>{lang[language].CURRENT_LANG}</div>
                    }}
                </LanguageContext.Consumer>
            </>
        )
    }
}