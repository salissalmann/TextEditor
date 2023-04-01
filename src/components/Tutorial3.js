import React from 'react'
import { useState } from 'react'

export default function Tutorial3() 
{

    const [Text , ChangeText ]  = useState("Turn On Light Mode");
    const [DivStyle, setTheme]  = useState( 
    {
        color: 'white',
        backgroundColor: "#212529",
        padding: "20px"
    })

    const ChangeTheme = ()=>
    {
        if (DivStyle.backgroundColor === "#212529" )
        {
            setTheme(
                {
                    color: 'black',
                     backgroundColor: "white",
                    padding: "20px"                            
                }
            )
            ChangeText("Turn On Dark Mode")
        }
        else
        {
            setTheme(
                {
                    color: 'white',
                    backgroundColor: "#212529",
                    padding: "20px"
              }
            )             
            ChangeText("Turn On Light Mode")
        }

    }

  return (
    <>
        <div className='container' style={DivStyle}>
            <h3>About Us</h3>
            <div className="accordion" style={DivStyle} id="accordionExample">
                <div className="accordion-item"  style={DivStyle}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>    
            <div className='container my-3'>
                  <button className='btn btn-primary' onClick={ChangeTheme}>{Text}</button>
            </div>    
      
        </div>
    </>   
  )
}
