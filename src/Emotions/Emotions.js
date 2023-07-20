import React from "react";

const Emotions = ({images})=>{
    return(
        <>
         {
                    images.map((image ,idx)=>(
                    <div key={idx}>
                    <input type="radio" name="emotions" id={idx} value={idx}/>
                    <label htmlFor={idx}>
                    <img src={image} alt="Emoji" />
                    </label>
                    </div>
                    ))
        } 
        </>
    );
}

export default Emotions;