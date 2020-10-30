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
}

class vedro{
    constructor(

        tag = null,
        src=''
    ){  
        this.tag = tag,
        this.src = src

        this.tag.src = src

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

    dlyaDomaEl.appendChild(massivDomov[i].htmlTag)
    document.getElementsByTagName('img')[i].style.width = 270 + 'px'// мне кажется эта строчка должна работать на все имг, а как задать класс я не понимаю, отому что js уже занял это слово
   

    massivVeder.push (
        new vedro(
            
            document.createElement('img'),
            './img/vedro.jpg' 
        )
    )


    dlyaVedraEl.appendChild(massivVeder[i].tag) // дурацкие огроные ведра!!!

    console.log(massivVeder)     
 

   
}




window.setInterval(function () {
   
    var whichDom = Math.floor(Math.random()*10)
    
    randomTime()
    
    function randomTime(){

        console.log(whichDom)

        window.setTimeout(function() {
            
            massivDomov[whichDom].vozgoranie()

        }, 3000); 

    }
}, 1000); 






console.log(massivDomov)
