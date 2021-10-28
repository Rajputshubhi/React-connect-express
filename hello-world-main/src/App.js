import React, {useEffect,useState} from 'react';
import axios from 'axios';

const App=()=>{

    const[mystate,setMyState]=useState([])
   
    const fetchData= async ()=>{
        const {data}=await axios.get('https://reqres.in/api/users');
          console.log(data)
         setMyState(data.data)
    }
   useEffect(()=>{
         fetchData();
   },[])

  return(
      <div>
         <h1>GET API</h1>
         <table border="10"> 
           <tr>
              <th>ID</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>EMAIL</th>
              <th>AVATOR</th>
           </tr>
           {mystate ? 
            mystate.map((item)=>{
              return(
                <tr>
                <td key={item.id}>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.avatar}</td>

                </tr>
              
              )
            })
         : ""}
           
         </table>
      </div>
  )

}
export default App;