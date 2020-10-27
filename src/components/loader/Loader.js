import React from 'react'
import './loader.sass'

export default function Loader() {
    return (
        <div className="atom-spinner">
            <div className="spinner-inner">
                <div className="spinner-line"></div>
                <div className="spinner-line"></div>
                <div className="spinner-line"></div>
                <div className="spinner-circle">&#9679;</div>
            </div>
        </div>
    )
}
