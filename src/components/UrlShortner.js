import React, { useState } from "react";
import { CreateNewShortenUrl } from "./CreateNewShortenUrl";
import { ShowAllUrl } from "./ShowAllUrl";


export function UrlShortner() {
    var [urlComponents, setUrlComponentValues] = useState({ showCreateComp: false, showAllUrlComp: false });

    function setShowOrHideComponent(e) {
        if (e.target.name === "createcomponent") {
            setUrlComponentValues({
                showCreateComp: true,
                showAllUrlComp: false
            });
        } else  if (e.target.name === "showAllUrlComponent") {
            setUrlComponentValues({
                showCreateComp: false,
                showAllUrlComp: true
            });
        }

    }
    return (
        <div>
            <h2>Welcome to Url Shortner Application...</h2>
            <p>
            <button name='createcomponent' onClick={setShowOrHideComponent}>Create New shorten Url</button>
             
            <button name='showAllUrlComponent' onClick={setShowOrHideComponent}>Show All Urls</button>
            </p>
            { urlComponents.showCreateComp ? <CreateNewShortenUrl/>: null}
            { urlComponents.showAllUrlComp ? <ShowAllUrl data={urlComponents}/> : null}
        </div>
    )
}

