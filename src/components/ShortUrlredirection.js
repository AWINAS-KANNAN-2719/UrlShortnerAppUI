import React, { useEffect } from "react";

export function ShortUrlredirection(prop) {

    console.log(prop);

    useEffect(() => {
        fetch('http://localhost:8080/' + prop.match.params.id,
            {
                redirect: 'follow'
            })
            .then((result) => result.json())
            .then((response) => {
                console.log(response);
                if (response.httpCode === '200') {
                  window.location.href = response.originalUrl;
                }else{
                    alert(response.responseDescription);
                    window.location.href = '/';
                }
            })
            .catch(function (err) {
                console.info(err );
            });
    }, [prop.match.params.id]
    );
    return (
        <div>
        </div>
    )
}