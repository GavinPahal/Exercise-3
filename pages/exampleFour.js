import { useState, useEffect} from "react"
export default function exampleOne() {
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState("gray");

    const [trigger, setTrigger] = useState(false);
    
    const HandleChange = () => {
        if(number > 2){
            setColor("orange");
        }
        console.log(number);
    }

    useEffect(() => {
        var interval;

        if(trigger) {
            interval = setInterval (() => {
                HandleChange();
                setTrigger(false)
            }, 3000)
         }
         console.log(number);
        console.log(trigger);   
    })
    return() =>clearInterveal(interval);
    [trigger]

    return ( 
        <>
            <main>
                <button onClick={() => {
                    setNumber(number + 1);
                    setTrigger(true);
                }}>Add Number</button>
                <h1 style={{ color: color}}>CHange the text color</h1>

            {
                number > 1 && <div style={{
                    backgroundColor: ${color}
                    lineHeight: 10,
                    padding: 20
                }}>
                    <div/>
            }
            </main>

        </>


    )
    }