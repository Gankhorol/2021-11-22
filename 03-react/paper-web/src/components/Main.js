import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function Main({ children }) {
    const [color, setColor] = useState("#aabbcc");

    return (
        <div style={{ textAlign: "center", border: "1px solid black", padding: "1rem", margin: "1rem" }}>
            Main
            {children[0]}
            <HexColorPicker color={color} onChange={setColor} />
            {children[1]}
        </div>
    );
}
