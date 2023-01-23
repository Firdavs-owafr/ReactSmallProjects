import React from "react";

const  Li = (props) => {
    // }
        return (
            <div>
                {props.dataBazzz.map((item) => {
                    console.log(item);
                    return ( <sli key={item.id}> Id: {item.id}   Title: {item.title} </sli> )
                })}
            </div>
        )
}
export default Li;