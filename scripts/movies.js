// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
//http://www.omdbapi.com/?i=tt3896198&apikey=6b84e9c0

function myfun(){

var getamnt=JSON.parse(localStorage.getItem("amount"))
getamnt.map(function(e,i){
 
 let d1=document.createElement("div")
 d1.innerText=e.enteramnt
 
 document.querySelector("#mlist").append(d1)
});
}


  
let id;
   async function search1(){

        //let q=document.getElementById("search").value
       // let url=`https://www.omdbapi.com/?t=${q}&apikey=6b84e9c0`
  
        try{
            let q=document.getElementById("search").value

            let res=await fetch(`https://www.omdbapi.com/?s=${q}&apikey=6b84e9c0`)

            let data=await res.json();
           // console.log(data)
           let movie1=data.Search
            appenddata(movie1)
           //return movies

        }
        catch(err)
        {
            console.log(err)
        }
    }

    function appenddata(movie1)
    {
        ///console.log(movie1)
       var x= document.querySelector("#movies")
        x.innerText=null
       
       movie1.forEach(function(el){
           
        let  d1=document.createElement("div")
        let p1=document.createElement("p")
        p1.innerText=el.Title

        let img1=document.createElement("img")
        img1.src=el.Poster

        let b1=document.createElement("button")
        b1.setAttribute("class","book_now")
        b1.innerText="book now"
        b1.style.backgroundColor="red"
        b1.style.color="white"  
        b1.style.borderRadius="10px"
        b1.style.padding="5px 10px"
        b1.style.border="0px"
        b1.addEventListener("click",function()
        {
            nextpage()
        })              

        d1.append(b1,p1,img1)

        x.append(d1)
       
       })
    }



    function debounce(func,delay)
    {
        if(id)
        {
            clearTimeout(id)
        }

        id=setTimeout(function(){
            search1()
        },delay)
    }


    function  nextpage(){
        window.location.href="checkout.html"
    }