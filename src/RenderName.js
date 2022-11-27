import React from "react";
const RenderName = (props) => {
    return props.names.sort((a, b) => a.name.localeCompare(b.name)).map((babyName, i) => {
        return(
            <p key={i} className={babyName.sex}>{babyName.name}</p>
        )
    })
}

export default RenderName;