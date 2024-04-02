import React, {useEffect, useState} from "react";


const Button = (props) => {
    const [click, setClick] = useState(0);
    useEffect(() => {
        document.title = `Натиснули ${click}`
    })
    return (
        <button onClick={() => setClick(click + 1)} className="button">{props.buttonText} {click}</button> 
    );
}

Button.defaultProps = {
    buttonText: "Button",
}

export default Button; 