import React, { useState, useEffect } from "react";
import '../index.css';

export function ShowAllUrl(data) {

    const [urls, setUrls] = useState([]);


    function loadDatas() {
        fetch('http://localhost:8080/urlshortner/urls'
        ).then((result) => result.json())
            .then((urls) => {
                if (urls.urlList != null) {
                    setUrls(urls);
                } else {
                    setUrls(urls);
                }

            });
    };

    useEffect(loadDatas, [data]);

    return (
        <div className='container' style={{ marginTop: '40px' }}>
            <div className='row'>
                <div className=' create-container col-lg-9 offset-lg-2'>
                    <div className='row justify-content-center' style={{ paddingTop: '30px' }}>
                        <div className='col-lg-8 offset-lg-4'>
                            <h4>Show All Urls</h4>
                        </div>
                    </div>

                    {urls.urlList != null ?
                        <table id="urltable">
                            <thead>
                                <tr>
                                    <th>Original Url </th>
                                    <th>Short Url</th>
                                    <th>Access count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    urls.urlList.map(url => (
                                        <tr key={url.id}>
                                            <td>{url.originalUrl}</td>
                                            <td>{url.shortUrl}</td>
                                            <td>{url.accessCount}</td>
                                        </tr>
                                    )
                                    )}
                            </tbody>
                        </table>
                        :
                        <div className='row' style={{ paddingTop: '20px' }}>
                            <div className='offset-lg-3 col-lg-2'>
                                <label><b>Error :  </b> </label>
                            </div>
                            {urls.responseDescription}
                        </div>

                    }
                </div>
            </div>
        </div >
    )

}