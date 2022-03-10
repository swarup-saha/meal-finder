import React from "react";


const ListItem =({ele,eleVal})=>{
    console.log("ListItem re-rendered")
    return <li>{ele} - {eleVal}</li>
}

export default React.memo(ListItem);