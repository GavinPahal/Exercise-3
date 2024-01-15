import { useEffect, useState } from "react"

export default function exampleOne() {
    const [number, setNumber] = useState(0);


    useEffect(() => {
        console.log(number)
    });
    return (
        <>
            <main>
                <h1>E</h1>
                <div>Infite loop</div>
                {number}
            </main>

        </>


    )

}