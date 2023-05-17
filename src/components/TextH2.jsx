import { useEffect, useState } from "react";


const TextH2 = () => {

    const [text, setText] = useState("");

    const handleText = (e) => {
        setText(e.target.value);
    }

    useEffect( () => {
        console.log("componente montado");
    }, [text]);


    return (
        <div>
            <input type="text" onChange={handleText} />
            <p>{text}</p>
        </div>
    )
};

export default TextH2;