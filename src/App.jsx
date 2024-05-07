import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />

            <img
                width={"100%"}
                src={"./src/images/bigImage-stepanka-pani.jpg"}
            />
        </>
    );
}
