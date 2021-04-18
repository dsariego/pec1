const mcData = require('minecraft-data')('1.8.8');

let arrayMc = mcData.foodsArray;
var itemsMC = document.getElementById("itemsMC");
var itemsIN = document.getElementById("listIngr");
var itemsRC = document.getElementById("listRec");
let url;

if(itemsMC) {
let nodoUl = "<ul>";
arrayMc.map( e => {
  url = "https://minecraft.fandom.com/wiki/"+e.name;
  nodoUl += "<li><a href="+url+" target=_blank>"+ e.displayName + "</a></li>";
})
nodoUl += "</ul>";
itemsMC.innerHTML = nodoUl;
itemsMC.setAttribute("id","listItems");
}

// LISTADO DE INGREDIENTES DE RECETAS
// Cada receta tiene unos ingredientes. 
const RabbitStew = [412, 391, 393, 281];
// Relacionados con la receta
const favLis = [412,391,396,393,281,282,376];
// Listado de todos los ingredientes existentes
const items = mcData.itemsArray;

// Llamada a la función para obtener los ingredientes
if(itemsIN) {
  let nodoUl = "<ul>";
  let recipeList = getItemList(RabbitStew);
  recipeList.map( e => {
    url = "https://minecraft.fandom.com/wiki/"+e.name;
    nodoUl += "<li><a href="+url+" target=_blank>"+ e.displayName + "</a></li>";
  })
  nodoUl += "</ul>";
  itemsIN.innerHTML = nodoUl;
  itemsIN.setAttribute("id","listIngredients");
}

if(itemsRC) {
  let nodoUl = "<ul>";
  let recomendaded = getItemList(favLis);
  recomendaded.map( e => {
    url = "https://minecraft.fandom.com/wiki/"+e.name;
    nodoUl += "<li><a href="+url+" target=_blank>"+ e.displayName + "</a></li>";
  })
  nodoUl += "</ul>";
  itemsRC.innerHTML = nodoUl;
  itemsRC.setAttribute("id","listRecomended");
}

function getItemList (recipe) {
  let displayIng = new Array;
  recipe.forEach(e => displayIng.push(items.filter(elm => elm.id === e)[0] ) );
  return displayIng;
} 
