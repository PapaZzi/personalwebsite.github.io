function GEEKFORGEEKS()                                    
{ 
    var name = document.forms["RegForm"]["Name"];               
    var email = document.forms["RegForm"]["EMail"];    
    var phone = document.forms["RegForm"]["Telephone"];  
    var what =  document.forms["RegForm"]["Subject"];
    var msg =  document.forms["RegForm"]["Msg"];  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
   
   if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

   
     if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
   if (what.value == "")                           
    { 
        window.alert("Please enter the services you want to know."); 
        what.focus(); 
        return false; 
    } 
	if (msg.value == "")                           
    { 
        window.alert("Please leave your message."); 
        msg.focus(); 
        return false; 
    } 

			
   window.alert("You have sent form to our professionals successfully!");
   window.location.reload();
    return true; 
}