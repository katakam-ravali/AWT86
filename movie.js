async function display()
{
    const url='https://imdb-api.com/API/AdvancedSearch/k_y87yrb5g?title_type=feature&user_rating=9,10&genres=family&countries=in&languages=te';
    const response=await fetch(url);
    var data=await response.json();
    return Promise.resolve(data);
}
display().then(function(data)
{
    console.log(data)
    let{results}=data;
    results.forEach(element => {
        let{title,imDbRating}=element;
        console.log('Title is '+title+' and Rating is '+imDbRating);
    })
},
function()
{
    console.log("URL not found");
})
