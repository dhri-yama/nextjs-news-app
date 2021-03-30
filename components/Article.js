import React from 'react'

export const Article = ({title, url, description, src}) => {
    return (
        <a href={url} target="_blank">
            <div className="my-6 p-4 rounded shadow-lg">
                <img src={src} alt=""/>
                <h2 className="text-xl font-medium">{title}</h2>
                <p className="italic text-md">{description}</p>
            </div>
        </a>
        
    )
}

export default Article
