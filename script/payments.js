function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };

  const serviceID = "service_a1eolv1";
  const templateID = "template_zpfl1y9";

  emailjs.send(serviceID,templateID,params)
  .then(
  res=>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    console.log(res);
    alert("Your payment sent successfully");
    location.href = "zz-index.html"
  }
)
.catch(err=>console.log(err));
}