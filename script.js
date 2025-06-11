const contactData =[];
function submitform(){
    
    const firstname=document.getElementById('fname').value;
    const lastname=document.getElementById('lname').value;
    const phonenumber=document.getElementById('phonenumber').value;
    const email=document.getElementById('email').value;

     if(! firstname || !email || !phonenumber){
          alert("please fill the required");
          return;
     }
     
     }
     function display(){
        const outputdiv=document.getElementById("res").value
        outputdiv.innerHTML="";
        contactData.forEach((entry,index)=>{
            outputdiv.innerHTML += `
            <div class="entry">
            ${index +1},${entry.fname}<br>
            email: ${entry.email}<br>
            Phonenumber:${entry.phonenumber}
            <div>

            `
            

            
        })
     }
