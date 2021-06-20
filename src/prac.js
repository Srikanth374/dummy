import React,{useState , useEffect} from 'react'

function Prac({name1}) {
    
    let [value,setValue]=useState(0);
    let[update,setUpdate]=useState(true);
    useEffect(()=> {
        console.log("hiii");
    },[update])
    function counter(){
        setValue(value+1);
        setUpdate(!update);
        console.log(value);
    }
    function Prac2(){
        setValue(value-1);
        setUpdate(!update);
        console.log(value);
    }
    return (
        <div>
            {name1}
            <p>{value}</p>
            <button onClick={counter}> increment</button> <br/>
            <button onClick={Prac2}>decrement</button>
        </div>
    )
}

export default Prac
