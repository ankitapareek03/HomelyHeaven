import React from 'react'

function Sign_up() {
  return (
   

        <div className='container'>
            <div>
           
            <input type='text' placeholder='NAME' required></input>
            </div><br></br>
            <div>
            
            <input type='email' placeholder='EMAIL' required></input>
            </div><br></br>
            <div>
           
            <input type='passward' placeholder='PASSWARD' required></input>


            </div>

            <div>
                <button value={Sign_up}></button>
            </div>
            


            
           
     
       
    </div>
  )
}

export default Sign_up