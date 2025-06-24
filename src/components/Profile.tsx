import React, { useRef, useState } from 'react'

type user = {
    name:string,
    age:number,
    isStudent:boolean
}

function Profile() {
    const [details, setDetails] = useState<user>({
        name:'sahla',
        age:33,
        isStudent:true
    })
    const updateName = (newOne:string) => {
        setDetails((prev)=>({
            ...prev,
            name:newOne
        }))
    }
    const inputRef = useRef<HTMLInputElement>(null)
    
    const handleClick = () => {
        inputRef.current?.focus()
    }
  return (
    <div>
        <h1>{details.name}</h1>
        <p>{details.age}</p>
        <button onClick={()=>updateName('ks')}>Update name</button>
        <input type='text' className='border border-red-600' ref={inputRef}/>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Profile