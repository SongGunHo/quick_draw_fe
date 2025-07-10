import React from "react";

const MessageBox =({items, children}) =>{
    if(children) items = children;
    items = Array.isArray(items) ? items:[items];
    return (
        <>
        </>
    )
};

export default React.memo(MessageBox);