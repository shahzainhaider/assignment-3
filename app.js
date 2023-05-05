const btn = document.getElementById('genreBtn');
const tableBody = document.getElementById('tableBody');
const lang = document.getElementById('lang')
const genre = document.getElementById('genre');
const year = document.getElementById('year');


const loadData =async ()=>{
   const response = await fetch('./data.json')
   const movies = await response.json();

   btn.addEventListener('click',()=>{
    const genreQuery = genre.value.toLowerCase();
    const yearQuery = year.value;
    const langQuery = lang.value.toLowerCase();
    tableBody.innerHTML = ""

    movies.filter(function (movie){
        const movieLanguage = movie.language.toLowerCase()
        let movieYear = movie.release_date;
        movieYear = movieYear.substring(0,4)

        if (!genreQuery && !yearQuery && !langQuery) {
            return false
        }
        else if((movieYear==yearQuery)&&(!langQuery) && (!genreQuery)){
            return movie
        }
        else if((movieLanguage === langQuery)&&(!yearQuery) && (!genreQuery)){
            return movie
        }
        else if((movieLanguage == langQuery)&&(movieYear == yearQuery) && (!genreQuery)){
            return movie
        }
        else if(genreQuery){
            for(let i =0;i<movie.genres.length;i++){
                if((movie.genres[i].toLowerCase().includes(genreQuery)) && (!yearQuery) && (!langQuery)){
                    return movie
                }
                else if((movie.genres[i].toLowerCase().includes(genreQuery)) && (movieYear==yearQuery) && (!langQuery)){
                    return movie
                }
                else if((movie.genres[i].toLowerCase().includes(genreQuery)) && (movieLanguage==langQuery) && (!yearQuery)){
                    return movie
                }
                else if((movie.genres[i].toLowerCase().includes(genreQuery)) && (movieYear==yearQuery) && (movieLanguage==langQuery)){
                    return movie
                }
            }
        }
       
    }).forEach((movie,id)=>{
        let movieYear = movie.release_date;
        movieYear = movieYear.substring(0,4);

        const tr = document.createElement('tr');
        tableBody.appendChild(tr).innerHTML=`<td>${id+1}</td>
        <td class="flex">
         <div class="tableImg">
           <img src="https://image.tmdb.org/t/p/w45${movie.image}"/>
         </div>
         <div class="detail">
           <p>${movie.title}</p>
           <span>${movie.genres.join(', ')} &nbsp;  ${movie.runtime}m</span>
         </div>
       </td>
        <td>${movieYear}</td>`
    })
   })

}
loadData();


