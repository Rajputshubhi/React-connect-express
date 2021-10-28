import React, { useState } from 'react';


const Post =()=>{
    const[firstname,setFirstname]=useState("")
    const[lastname,setLastname]=useState("")
    const[email,setEmail]=useState("")
    const[avatar,setAvatar]=useState("")


    const saveUser=()=>{
        console.log({firstname,lastname,email,avatar});
          let data={firstname,lastname,email,avatar};
          fetch('https://reqres.in/api/users',{
              method:'POST',
              headers:{
                  "Accept":"application/json",
                  "Content-Type":"application./json"
              },
              body:JSON.stringify(data)
          }).then((result)=>{
            //   console.log(result)
              return result.json().then((resp)=>{
                  console.log(resp)
              })
          })
        
    }

  return(
      <div>
      <h1>POST METHOD store data api</h1>
       <input type="text" value={firstname} name={firstname} onChange={(e)=>setFirstname(e.target.value)} placeholder="first name"  /> <br /><br />
       <input type="text" value={lastname} name={lastname} onChange={(e)=>setLastname(e.target.value)} placeholder="last name" /> <br /><br />
       <input type="text" value={email} name={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" /> <br /><br />
       <input type="text" value={avatar} name={avatar} onChange={(e)=>setAvatar(e.target.value)} placeholder="avatar"/> <br /><br />

       <button type="button" onClick={saveUser}>SAVE USER</button>

     </div>
  )
}
export default Post; 