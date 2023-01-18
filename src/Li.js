import React from "react";

const  Li = (props) => {
    // }
        return (
            <div>
                {props.dataBazzz.map((item) => {
                    console.log(item);
                    return ( <li key={item.id}> Id: {item.id}   Title: {item.title} </li> )
                })}
            </div>
        )
}
export default Li;