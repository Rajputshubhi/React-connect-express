import React ,{useEffect,useState} from 'react';
import axios from 'axios';
  


const Get=()=>{
    const[mydata,setMydata]=useState("");

    const fetchData=async ()=>{
         const {data}=await axios.get('http://localhost:8080');
         console.log(data)
         setMydata(data)

    }

    useEffect(()=>{
    fetchData()
},[])
 
     return(
         <div>
            <p>API DATA</p>
            { mydata ?
                mydata.map((item,index)=>{
                    return(
                        <p key={index}>{item.id}{item.name} {item.email}</p>
                    )
                })
            : " "}
         </div>
       
     )

}
export default Get;