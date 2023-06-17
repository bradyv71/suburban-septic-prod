function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
        phone:document.getElementById("phone").value,
        contact:document.getElementById("contact").value,
        cleaning:document.getElementById("cleaning").value,
        address:document.getElementById("address").value,
    };
    const serviceID="service_pt1kvhk"
    const templateID="template_7szq8ky"

    emailjs
    .send(serviceID,templateID,params).then((res)=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        document.getElementById("phone").value="";
        document.getElementById("contact").value="";
        document.getElementById("cleaning").value="";
        document.getElementById("address").value="";

        console.log(res);
        alert("Your message was sent sucessfully");
    })
    .catch((err) =>console.log(err));
}



// slideshow---------------

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500);    
}

