import React, { useState } from "react";


export function CreateNewShortenUrl() {

    var [url, setUrl] = useState('');
    var [shortUrlResponse, setShortUrlResponse] = useState([]);

    function onUrlTextChange(e) {
        setUrl(e.target.value);
    };

    
    function createNewShortUrl() {
        if (url === '') {
            alert('Enter Url Value')
        } else {
            fetch('http://localhost:8080/urlshortner/shorten?origUrl='+url
                , {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                }).then((result) => result.json())
                .then((urlrepo) => {
                    setShortUrlResponse(urlrepo);
                });
        }
    };


    return (
        <div>
            <h3>Create New Shorten Url</h3>
            <p>
                <label><b>New url :  </b> </label>
                <input type="text" name="url" value={url} onChange={onUrlTextChange} />
            </p>

            <button onClick={createNewShortUrl}>Add New Url</button>

            {shortUrlResponse.httpCode === "200" &&
                <div>
                    <p>
                        {shortUrlResponse.responseDescription}
                    </p>
                    <p>
                        <label><b>Original Url :  </b> </label>
                        {shortUrlResponse.originalUrl}
                    </p>
                    <p>
                        <label><b>Shorten url :  </b> </label>
                        {shortUrlResponse.shortUrl}
                    </p>
                </div>

            }
            {shortUrlResponse.httpCode === "400" &&

                <p>
                    <label><b>Error detail :  </b> </label>
                    {shortUrlResponse.responseDescription}
                </p>
            }
        </div>
    )

}