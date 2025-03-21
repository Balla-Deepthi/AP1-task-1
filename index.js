let loader=document.getElementById("loader")


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
  document.body.appendChild(item)

}
loader.remove()
getData()


