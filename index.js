var link1 = document.getElementById('links-1')
var link2 = document.getElementById('links-2')
var logout = document.getElementById('out')
var username = document.querySelector('#links-2 h2')
var contan1 =document.getElementById('cont1')
var contan2=document.getElementById('cont2')
var contan3=document.getElementById('cont3')
var contan4=document.getElementById('cont4')
var cart=document.getElementById('cart')
var icon=document.getElementById('iconcart')
var text=document.querySelector('#cart div')
var count= document.getElementById('cont')


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


var data = [
    {
        id:1,
        title:'burger 1',
        img: 'gg.jpg',
        price:200
    },
    {
        id:2,
        title:'burger 2',
        img: 'kk.jpg',
        price:200
    },
    {
        id:3,
        title:'burger 3',
        img: 'rr.jpg',
        price:200
    },
    {
        id:4,
        title:'burger 4',
        img: 'jj.jpg',
        price:200
    },
    {
        id:5,
        title:'burger 5',
        img: 'lll.jpg',
        price:200
    },
   



]

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
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star-half-empty"></i></li>
                <li><i class="fa fa-star-o"></i></li>
                
             </ul><br><br>
             <h5>${item.price} $</h5>
             <button onclick=addtocart(${item.id})>Add stor</button>
        </div> <br/>
            
            
        `
        )
    
    })
    contan1.innerHTML = x
    


}
draw()

var dat= [
    {
        id:6,
        title:'burger 6',
        img: 'gg.jpg',
        price:200
    },
    {
        id:7,
        title:'burger 7',
        img: 'kk.jpg',
        price:200
    },
    {
        id:8,
        title:'burger 8',
        img: 'rr.jpg',
        price:200

    },
    {
        id:9,
        title:'burger 9',
        img: 'jj.jpg',
        price:200
    },
    {
        id:10,
        title:'burger 10',
        img: 'lll.jpg',
        price:200
    },
   



]

function draw2(){

    x = dat.map((item)=>{
        return(

         `
            <div class="box">
            <img src="./img/${item.img}" height="100px" width="200px" alt="">
            <h4>${item.title}</h4>
            <ul>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star-half-empty"></i></li>
                <li><i class="fa fa-star-o"></i></li>
                
             </ul><br><br>
             <h5>${item.price} $</h5>
             <button onclick=addtocar(${item.id})>Add stor</button>
        </div> <br/>
            
            
        `
        )
    
    })
    
    contan2.innerHTML = x


}
draw2()

icon.addEventListener('click',open)

function open(){

if(cart.style.display == 'none'){
   cart.style.display = 'block'
}else{
    cart.style.display = 'none'
}}





if ( localStorage.getItem('product') ) {
    var product= JSON.parse(localStorage.getItem('product'))
} else {
    var product = []
}

count.style.display='block'
count.innerHTML= product.length


product.map((s) =>{

    text.innerHTML += `<p>${s.title}</p>`
   
})









var product=[]
function addtocart(id){
    if(localStorage.getItem('email')){
    text.innerHTML =''

    var addprodut = data.find((e) =>{
        return e.id === id



    })
    product =[...product,addprodut]
    product.map((s) =>{

    text.innerHTML += `<p>${s.title}</p>`
    count.style.display='block'
    count.innerHTML= product.length



    })
    localStorage.setItem('product',JSON.stringify(product))
    // count.style.display='block'
    // count.innerHTML= product.length

}else{
    alert('complet your login');
    
    }
}

var product=[]
function addtocar(id){
    if(localStorage.getItem('email')){
    text.innerHTML =''

    var addprodu = dat.find((e) =>{
        return e.id === id



    })
    product =[...product,addprodu]
    product.map((s) =>{

    text.innerHTML += `<p>${s.title}</p>`
    count.style.display='block'
    count.innerHTML= product.length

    })
    localStorage.setItem('product',JSON.stringify(product))
    // count.style.display='block'
    // count.innerHTML= product.length
    
}else{
    alert('complet your login');
    
    }
}




var dd = [
    {
        id:11,
        title:'pizza 1',
        text:'pizza margherita Italy,first toast',
        img: 'p1.jpg',
        price:200
    },
    {
        id:12,
        title:'pizza 2',
        text:'pizza italian vegetables,first toast ',
        price:200,
        img: 'p2.jpg'
    },
    {
        id:13,
        title:'pizza 3',
        text:'pizza italian vegetables,first toast ',
        img: 'p3.jpg',
        price:200
    },
    {
        id:14,
        title:'pizza 4',
        text:'pizza italian vegetables,first toast ',
        img: 'p4.jpg',
        price:200
    },
    {
        id:15,
        title:'pizza 5',
        text:'pizza italian vegetables,first toast ',
        img: 'p5.jpg',
        price:200
    },
    {
        id:16,
        title:'pizza 6',
        text:'pizza italian vegetables,first toast ',
        img: 'p3.jpg',
        price:200
    },
  
   
   



]

function draw3(){

    x = dd.map((item)=>{
        return(

         `
            <div class="boxx">
            <img src="./img/${item.img}" height="100px" width="200px" alt="">
            <h4>${item.title}</h4>
            <p>${item.text}</p>
            
            <ul>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star-half-empty"></i></li>
                <li><i class="fa fa-star-o"></i></li>
                
             </ul><br><br>
             <h5>${item.price} $</h5>
             <button onclick=add(${item.id})> Add stor</button>
        </div> <br/>
            
            
        `
        )
    
    })
    contan3.innerHTML = x
    


}
draw3()



function add(id){
    if(localStorage.getItem('email')){
    text.innerHTML =''
    

    var addp = dd.find((e) =>{
        return e.id === id

    })

    product =[...product,addp]
    product.map((s) =>{
    
      text.innerHTML += `<p>${s.title}</p>`
     

    })
    localStorage.setItem('product',JSON.stringify(product))
    count.style.display='block'
    count.innerHTML= product.length
    
    
}else{
alert('complet your login');

}

}



var dad = [
    {
        id:17,
        title: 'steak 1',
        img: 's8.jpg',
        price:200
    },
    {
        id:18,
        title:'steak 2',
        img: 's9.jpg',
        price:200
    },
    {
        id:19,
        title:'steak 3',
        img: 's10.jpg',
        price:200
    },
    {
        id:20,
        title:'steak 4',
        img: 's11.jpg',
        price:200
    },
    {
        id:21,
        title:'steak 5',
        img: 's9.jpg',
        price:200
    },
    {
        id:22,
        title:'steak 6',
        img: 's8.jpg',
        price:200
    },
    {
        id:23,
        title:'steak 7',
        img: 's10.jpg',
        price:200
    },
    {
        id:24,
        title:'steak 8',
        img: 's7.jpg',
        price:200
    },
   



]


function draw4(){

    x = dad.map((item)=>{
        return(

         `
            <div class="box3">
            <img src="./img/${item.img}" height="100px" width="200px" alt="">
            <h4>${item.title}</h4>
            
            <ul>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star-half-empty"></i></li>
                <li><i class="fa fa-star-o"></i></li>
                
             </ul><br><br>
             <h5>${item.price} $</h5>
             <button onclick=ded(${item.id})> Add stor</button> 
        </div> <br/>
            
            
        `
        )
    
    })
    contan4.innerHTML = x
    


}
draw4()

function ded(id){
    if(localStorage.getItem('email')){
    text.innerHTML =''
    

    var add = dad.find((e) =>{
        return e.id === id

    })

    product =[...product,add]
    product.map((s) =>{
    
      text.innerHTML += `<p>${s.title}</p>`
      
      

    })
    localStorage.setItem('product',JSON.stringify(product))
    count.style.display='block'
      count.innerHTML= product.length
}else{
alert('complet your login');

}}








