let names = [
  "Sant Agata",
  "Castello Orsino",
  "Piazza del elefante",
  "Teatro Romano",
  "Via dei Crociferi",
  "Via del Barocco",
  "Piazza duomo",
  "Via Etnea",
  "Piazza Stesicoro",
  "Anfiteatro Romano",
];
//Sort names in ascending order
let sortedNames = names.sort();

//reference
let input = document.getElementById("input");
var nome;
//Execute function on keyup
input.addEventListener("keyup", (e) => {
  //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();
  for (let i of sortedNames) {
    //convert input to lowercase and compare with each string

    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      console.log(names.indexOf(input.value))
      console.log(input.value)
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      //Display matched part in bold
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";
      word += i.substr(input.value.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});
var a;
function displayNames(value) {
  input.value = value;
  nome = value;
  if(nome=="Sant Agata")
  {
      a=1;
  }
  if(nome=="Castello Orsino")
  {
      a=2;
  }
  if(nome=="Piazza del elefante")
  {
      a=3;
  }
  if(nome=="Teatro Romano")
  {
      a=4;
  }
    if(nome=="Sant Via dei Crociferi")
      {
              a=5;
      }
  if(nome=="Via del Barocco")
  {
      a=6;
  }
  if(nome=="Piazza duomo")
  {
      a=7;
  }
  if(nome=="Via Etnea")
  {
      a=8;
  }
  if(nome=="Piazza Stesicoro")
  {
      a=9;
  }
  if(nome=="Anfiteatro Romano")
  {
              a=10;
  }
  removeElements();

}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
let urle="";
function search() {
  switch (a) {
      case 1:
          window.location ="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch";
  
        break;
        case 2:
          window.location ="https://stackoverflow.com/questions/4851657/call-break-in-nested-if-statements";
  
        break;
        case 3:
          window.location ="https://www.google.com";
  
        break;
        case 4:
          window.location ="https://www.freecodecamp.org/news/javascript-string-comparison-how-to-compare-strings-in-js/";
  
        break;
        case 5:
          window.location ="https://it.wikipedia.org/wiki/Catania";
  
        break;
        case 6:
          window.location ="https://it.wikipedia.org/wiki/Pagina_principale";
  
        break;
        case 7:
          window.location ="https://it.wikipedia.org/wiki/Open_13_Provence_2020_-_Singolare";
  
        break;
        case 8:
          window.location ="https://it.wikipedia.org/wiki/Denis_Shapovalov";
  
        break;
        case 9:
          window.location ="https://it.wikipedia.org/wiki/Aiuto:Aiuto";
  
        break;
        case 10:
          window.location ="https://it.wikipedia.org/w/index.php?title=Speciale:Libro&bookcmd=book_creator&referer=Aiuto%3AAiuto";
  
        break;
      }
  return urle;
}