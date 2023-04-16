const ul = document.getElementById("ul")
const inputGenre = document.getElementById("genre");
const genreBtn = document.getElementById('genreBtn')

const loadData =async ()=>{
    let response =await fetch('./data.json')
    let movies =await response.json();
    movies = JSON.parse(JSON.stringify(movies,(a,b)=>{
        return typeof b === 'string'? b.toLowerCase():b
    }))
// console.log(movies);
movies.forEach((element)=>{
    let title = element.title;
    const li = document.createElement('li')
     let a =ul.appendChild(li).innerHTML = `<h2>${title}</h2><p>${element.overview}</p><span><strong>TAG: </strong>${element.tagline}</span><br>`
})
}
loadData()

const searchGenre = ()=>{
    const query = inputGenre.value
    console.log(query)
}



genreBtn.addEventListener("click",searchGenre)



// const movies = async()=>{
//     let res = await fetch('./data.json')
//     let data =await res.json();
//     data = JSON.parse(JSON.stringify(data,(a,b)=>{
//         return typeof b === "string" ? b.toLowerCase() : b

//     }))
//     // console.log(data)
//     data.map((element)=>{
//         // let title = element.title;
//         // console.log(title);
//         for(let i= 0;i<data.length;i++ ){
//             if(element.genres[i] =="action"){
//                 console.log(true)
//             }
//         }
//     })
// }
// movies()

// var data = {
//     id: 0,
//     name: "SAMPLe",
//     forms: {
//       formId: 0,
//       id: 0,
//       text: "Sample Text"
//     }
//   };
  
//   var res = JSON.parse(JSON.stringify(data, function(a, b) {
//     return typeof b === "string" ? b.toLowerCase() : b
//   }));
  
//   console.log(res)