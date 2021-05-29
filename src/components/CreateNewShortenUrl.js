import React, { useState } from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

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
            fetch('http://localhost:8080/urlshortner/shorten?origUrl=' + url
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
        <div className='container' style={{ marginTop: '40px' }}>
            <div className='row'>
                <div className=' create-container col-lg-9 offset-lg-2'>
                    <div className='row justify-content-center' style={{ paddingTop: '30px' }}>
                        <div className='col-lg-8 offset-lg-3'>
                            <h4>Create New Shorten Url</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='offset-lg-3 col-lg-2'>
                            <label style={{ paddingTop: '5px' }}><b>Actual url :  </b> </label>
                        </div>
                        <div className='col-lg-4'>
                            <input className='input-background Input-text-label' type="text" name="url" value={url} onChange={onUrlTextChange} />
                        </div>
                    </div>
                    <div className='row' style={{ paddingTop: '20px' }}>
                        <div className='offset-lg-4 col-lg-4'>
                            <button className='create-btn-background' style={{ paddingTop: '0px !important' }} onClick={createNewShortUrl}>
                                <span className='create-btn-label'>Create</span>
                            </button>
                        </div>
                    </div>
                    {shortUrlResponse.httpCode === "200" &&
                        <div>
                            <div className='row' style={{ paddingTop: '20px' }}>
                                <div className='offset-lg-3 col-lg-4'>
                                    {shortUrlResponse.responseDescription}
                                </div>
                            </div>
                            <div className='row' style={{ paddingTop: '10px' }}>
                                <div className='offset-lg-3 col-lg-2'>
                                    <label><b>Original Url :  </b> </label>
                                </div>
                                {shortUrlResponse.originalUrl}

                            </div>
                            <div className='row' style={{ paddingTop: '10px' }}>
                                <div className='offset-lg-3 col-lg-2'>
                                    <label><b>Shorten url :  </b> </label>
                                </div>
                                {shortUrlResponse.shortUrl}

                            </div>
                        </div>

                    }
                    {shortUrlResponse.httpCode === "400" &&

                        <div className='row' style={{ paddingTop: '20px' }}>
                            <div className='offset-lg-3 col-lg-2'>
                                <label><b>Error :  </b> </label>
                            </div>
                            {shortUrlResponse.responseDescription}
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}