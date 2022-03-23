async function display()
{
    let name=document.getElementById("district");
   const url='https://api.track-covid19.in/district_v2.json';
   const response=await fetch(url);
   var data=await response.json();
   console.log(data);
   let{TG:{active,recovered,dead}}=data;
   console.log("Active ",active);
   console.log("Recovered ",recovered);
   console.log("Dead ",dead);
}