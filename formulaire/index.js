 function validation(event){ 
 event.preventDefault()
  if( isEmpty() && isPassValid() && isEmailValid() ){
   alert ("welcome")
 }
 return false 
}
    function isEmpty(){
    var inputList =document.getElementsByClassName("inputs")
    for(let input of inputList) {
     if (input.value.trim() == "")
     {
        alert ("Please fill in all the fields!")
        return false
     }
    }
    return true 
  }
 function isPassValid(){
 let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/
 let str= (document.querySelector('#password-btn').value)
 let test =(re.test(str))
if (!test){
  alert("invalid password")
}

}
function isEmailValid(){
  var reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var str = (document.querySelector('#email').value)
  var test = (reg.test(str))
  if(!test){
    alert("Enter valid mail adress")
  }
}
 
    
  document.getElementById("MyAnchor").addEventListener("click", validation)