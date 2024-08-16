import React,{useState} from "react"
function MyComponent(){
    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    function updateName(){
        setName("vivek")
    }
    function updateAge(){
        setAge(age+1)
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>NAME</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>AGE</button>
        </div>
    )
}
export default MyComponent