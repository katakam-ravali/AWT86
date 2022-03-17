async function display()
{
    let name=document.getElementById("city");
   const url='https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=dd28abd04c32b8134674d7921d8a06fc&units=metric';
   const response=await fetch(url);
   var data=await response.json();
   console.log(data);
   let{main:{temp,temp_min,temp_max}}=data;
   console.log("min temp:",temp_min);
   console.log("max temp:",temp_max);
   console.log("temp ",temp);
   document.getElementById("test").innerHTML=temp;
}