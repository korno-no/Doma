// 10 домиков
// каждое неопредленное время один из домиков загорается
// на против данного домика появляется ведро и в течение 5 секунд тушит этот дом и исчезает
/* window.setTimeout(function() {
    console.log('okey');
  }, 3000);
  window.setInterval(function() {
    console.log('haha');
  }, 1000); */






var dlyaDomaEl=document.getElementById('dlyaDoma')

var dlyaVedraEl=document.getElementById('dlyaVedra')

const massivDomov = []

const massivVeder = []




class dom{
    constructor(

        fire = false,
        htmlTag = null,
        src=''
    ){
        this.fire = fire,
        this.htmlTag = htmlTag,
        this.src = src

        this.htmlTag.src = src
    }
    vozgoranie(){

        this.fire = true
        this.src = "./img/dom_fire.jpg"
        this.htmlTag.src = "./img/dom_fire.jpg"
    }

    tushenie(){
        this.fire = true
        this.src = "./img/dom.jpg"
        this.htmlTag.src = "./img/dom.jpg"
    }

}

class vedro{
    constructor(

        htmlTag = null,
        src=''
    ){  
        this.htmlTag = htmlTag,
        this.src = src

        this.htmlTag.src = src

    }
    
}
 


for(let i=0; i<10; i++){

    massivDomov.push  (

        new dom(
            false,
            document.createElement("img"),
            './img/dom.jpg',     
        )
    )
    
   
        massivVeder.push (
            new vedro(       
                document.createElement('img'),
                './img/vedro.jpg' 
            )
        )
    
  
    
    
    
    
    dlyaDomaEl.appendChild(massivDomov[i].htmlTag) 
    massivDomov[i].htmlTag.style.width = '150px'
    
    dlyaVedraEl.appendChild(massivVeder[i].htmlTag)
    massivVeder[i].htmlTag.style.width= '150px'
    massivVeder[i].htmlTag.style.opacity = 0

}



window.setInterval(function () {
   
    var whichIND = Math.floor(Math.random()*10)
    
    randomTime()
    
    function randomTime(){

        console.log(whichIND)

        window.setTimeout(function() {
            
            massivDomov[whichIND].vozgoranie()
            
        }, 3000); 

        window.setTimeout(function() {
            
            massivVeder[whichIND].htmlTag.style.opacity = 1
            
        }, 4000); 
        window.setTimeout(function() {
            
            massivVeder[whichIND].htmlTag.style.opacity = 0
            
        }, 9000); 
        window.setTimeout(function() {
            
            massivDomov[whichIND].tushenie()
            
        }, 9000); 
          
    }
}, 2000); 

console.log(massivDomov)
