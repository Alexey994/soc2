
import React from "react"
import { useState ,  useEffect } from "react";


const ProfileWithStatusHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status , setStatus] = useState(props.status);
    let [test , setTest] = useState(0);
    

    const testF = ()=>{
        setTest(test + 1)
    }
    const testF2 = ()=>{
        setTest(test - 1)
    }

    useEffect(() => {
      setStatus(props.status)
    },[props.status])
    

   const activateEditMode = () => {
    setEditMode(true);
   }

   const deaActivateEditMode = () => {
    setEditMode(false);
   props.updateStatus(status);
   debugger
    alert(status)
   
 
    }


const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
}

return (
    <>
    <div>
        {!editMode &&
        <div>
            <span onDoubleClick={activateEditMode}>{props.status || '---------' }</span>
            <h1>TEST count {test}</h1>
            <button onClick={testF}>  CLICK + </button>
            <button onClick={testF2}> CLICK - </button>
       </div>
}
      {editMode &&
    <div>
        <input 
        onChange={onStatusChange} 
        autoFocus={true} 
        onBlur={deaActivateEditMode} 
        value={status}/>
   </div>
       }
    </div>
     </>
    
    
)
}

export default ProfileWithStatusHook