var inputemail = document.getElementById('input-email')
var inputpass = document.getElementById('input-pass')
var btnsend = document.getElementById('btn-send')
var emaillocstoreg = localStorage.getItem('email')
var passlocstoreg = localStorage.getItem('pass')


 btnsend.addEventListener('click',send)

 function send() {
    if( inputemail.value === emaillocstoreg && inputpass.value === passlocstoreg){
       setTimeout(() => {
        location = 'index.html'
        
       }, 1000);
    }else{

        alert('Complete the fields Correctly')
    }
 }