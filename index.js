let loader=document.getElementById("loader")
let container=document.createElement("div")
container.className="container"


async function getData()
{
    try{
      let response=await fetch("https://discreet-planet-apatosaurus.glitch.me/products")
      if(!response.ok)
      {
        throw new Error("HTTP Requets Error : "+response.status)
      }
      let result=await response.json()
      displayData(result.message)
     

    }
    catch(err)
    {
       console.error(err)
    }
}
 function displayData(imageurl)
{
    let item=document.createElement("div")
    item.className="item"
  item.innerHTML=
  `<img src="${imageurl}">`
  container.appendChild(item)
  loader.remove()
  document.body.appendChild(container)
 
  
  // container.appendChild("item")
  // document.body.appendChild(container)


}

getData()


