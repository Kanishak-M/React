import React from 'react'

export default function message(props) {
    return (
        <div>
            {props.val === "success" ? <div className="alert alert-primary" role="alert">
            Record Saved
            </div> 
            : 
            <div className="alert alert-danger" role="alert">
                Alert Record Not Saved
            </div>}
        </div>
    )
}
