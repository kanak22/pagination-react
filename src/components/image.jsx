import React from 'react';
import "./component.css";

function Image(props){

    console.log(props);
    return(
        <div key={props.image.id}>
            <img className='image' src={props.image.url} alt={props.image.alt} />
        </div>
    )
}

export default Image;