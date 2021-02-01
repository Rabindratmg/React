import React from 'react';

function Contact(props){
    return(
        <div>
           <p><input type ="checkbox" 
           checked={props.data.completed} 
           onChange={()=>props.handleChange(props.data.id)} />
           { props.data.task } </p>       
        </div>
    )
}
export default Contact;