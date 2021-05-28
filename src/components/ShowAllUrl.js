import React, { useState, useEffect } from "react";


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
        <div>
            <h1>Show All Urls</h1>
            <style>{"table,th,tr,td{border:2px solid blue;}"}</style>
            {urls.urlList != null ?
                <table>
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
                : <p>{urls.responseDescription}</p>
            }

        </div>
    )

}