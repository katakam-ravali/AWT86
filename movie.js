async function display()
{
    const url='https://imdb-api.com/API/AdvancedSearch/k_y87yrb5g?title_type=feature&user_rating=8.5,10&genres=family&countries=in&languages=te';
    const response=await fetch(url);
    var data=await response.json();
    return Promise.resolve(data);
}
display().then(function(data)
{
    console.log(data)
    let{results}=data;
    table=  document.getElementById("table");
    results.forEach(element => {
        let{title,imDbRating,imDbRatingVotes}=element;   
      table.innerHTML+='<tr><td>'+title+'</td><td>'+imDbRating+'</td><td>'+imDbRatingVotes+'</td></tr>';
    })
},
function()
{
    console.log("URL not found");
})
