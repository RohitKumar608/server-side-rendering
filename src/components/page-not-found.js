import React from 'react';

const pageNotFound = ({staticContext = {}}) => {
    staticContext.notFound = true
    return(
        <div>
            <h3>
                Page Not Found.
            </h3>
        </div>
    )
}

export default {
    component:pageNotFound
}