import React, { useState } from "react";
import { CreateNewShortenUrl } from "./CreateNewShortenUrl";
import { ShowAllUrl } from "./ShowAllUrl";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export function UrlShortner() {
    var [urlComponents, setUrlComponentValues] = useState({ showCreateComp: false, showAllUrlComp: false });

    function setShowOrHideComponent(e) {
        if (e.target.name === "createcomponent") {
            setUrlComponentValues({
                showCreateComp: true,
                showAllUrlComp: false
            });
        } else if (e.target.name === "showAllUrlComponent") {
            setUrlComponentValues({
                showCreateComp: false,
                showAllUrlComp: true
            });
        }

    }
    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
            <div className='col-lg-8 offset-lg-4'> 
                <h2>Url Shortner Application</h2>
            </div>   
            </div>

            <div className='row ' style={{paddingTop:"20px"}}>
                <div className='offset-lg-2 col-lg-4'>
                    <button className='button' name='createcomponent' onClick={setShowOrHideComponent}>Create New shorten Url</button>
                </div>
                <div className='offset-lg-1 col-lg-4'>
                    <button className='button' name='showAllUrlComponent' onClick={setShowOrHideComponent}>Show All Urls</button>
                </div>
            </div>
            { urlComponents.showCreateComp ? <CreateNewShortenUrl /> : null}
            { urlComponents.showAllUrlComp ? <ShowAllUrl data={urlComponents} /> : null}
        </div>
    )
}

