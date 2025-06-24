// import { useRef, useState } from "react"

// type SampleProps = {
//     firstName: string
// }

// // //without destructuring
// // function Sample(props: SampleProps) {
// //   return (
// //     <div>{props.firstName}</div>
// //   )
// // }

// //after destructuring
// function Sample ({firstName}: SampleProps) {
//     const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
//             alert('clickedddd')
//     }
//    const [count, setCount] = useState<number>(0);
//    const [ob, setOb] = useState<{fname:string,lname:string,age:number}| null>(null)

//    const test = (name:string,message:string):{message:string} => {
//     return {"message":message}
//    }
//    const {message} = test('sahla','hello')
//    const ref = useRef<HTMLInputElement>(null);
//    ref.current?.focus()
//     return (<>
//     <h1>{firstName}</h1>
//     <p>{count}</p>
//     <button onClick={handleClick}>click</button>
//     {message}
//     <input type="text" ref={ref}/>

//     </>
//     )
// }

// export default Sample