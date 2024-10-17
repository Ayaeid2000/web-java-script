var inputfname = document.getElementById('input-fn')
var inputlname = document.getElementById('input-ln')
var inputemail = document.getElementById('input-email')
var inputpass = document.getElementById('input-pass')
var btnsend = document.getElementById('btn-send')



btnsend.addEventListener('click',send)
function send (){
    if(inputfname.value===''|| inputlname.value ===''|| inputemail.value===''|| inputpass.value===''){

    alert('Complete the fields')
}else{
    localStorage.setItem('fname',inputfname.value)
    localStorage.setItem('lname',inputlname.value)
    localStorage.setItem('email',inputemail.value)
    localStorage.setItem('pass',inputpass.value)

    setTimeout(() => {
        location = 'login.html'
    }, 1000);




}
}