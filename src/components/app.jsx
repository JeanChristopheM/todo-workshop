import React, {useState, useEffect} from "react";

function App() {
    const [count, setCount] = useState(0);
    const [intervalID, setIntervalID] = useState(0);
    const [go, setGo] = useState("start");

    const startTimer = () => {
        setIntervalID(
            setInterval(() => {
                setCount((currentCount) => currentCount + 1);
            }, 100),
        );
    };
    const stopTimer = () => {
        clearInterval(intervalID);
    };
    useEffect(() => {
        if (go === true) startTimer();
        if (!go) stopTimer();
    }, [go]);
    return (
        <>
            <div>{count}</div>
            <div>
                <button
                    type={"button"}
                    onClick={() => {
                        setGo(true);
                    }}>
                    {"GO"}
                </button>
                <button
                    type={"button"}
                    onClick={() => {
                        setGo(false);
                    }}>
                    {"STOP"}
                </button>
            </div>
        </>
    );
}

export default App;
