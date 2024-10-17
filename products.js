var link1 = document.getElementById('links-1')
var link2 = document.getElementById('links-2')
var logout = document.getElementById('out')
var username = document.querySelector('#links-2 h2')
var contan1 =document.getElementById('cont1')
var contan2=document.getElementById('cont2')
var contan3=document.getElementById('cont3')
var contan4=document.getElementById('cont4')
var data= JSON.parse(localStorage.getItem('product'))
var total = 0
var mybtn = document.getElementById('btn')
var text3 =  document.getElementById('div3')



if(localStorage.getItem('email')){

    link1.style.display = 'none'
    link2.style.display = 'block'
    username.innerHTML = '<i class="fa fa-user" aria-hidden="true"></i> ' + localStorage.getItem('fname') 
    
}

logout.addEventListener('click',out)
function out(){
    localStorage.clear()

    setTimeout(() => {
        location = 'signup.html'
    },1000);

}


function draw(){

    x = data.map((item)=>{
        return(

         `
         
            <div class="box">
            <img src="./img/${item.img}" height="100px" width="200px" alt="">
            <h4>${item.title}</h4>
            <ul>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star-half-empty"></i></li>
                <li><i class="fa fa-star-o"></i></li>
                
             </ul>
             <button onclick=delet(${item.id})>Delet</button><br/><br/><br/><br/><br/>
        </div> <br/>
            
            <br/>
        `
        )
    
    })
    contan4.innerHTML = x
    


}
draw()



function delet (id){

    
    
     var index = data.map((y) => {
 
         
      return  y.id
     
 
 
     }).indexOf(id)
    
      data.map((y) => {
 
         
      return   y.price
     
 
 
     }).indexOf(id)
    
    data.splice(index, 1)
    total = total - 200
  
    draw(data)

    



}






data.map((s) =>{

    total += +(s.price)
   
})


mybtn.onclick = function(){
    text3.innerHTML = total +'$'

}
