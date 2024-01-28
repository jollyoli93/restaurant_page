// const createDomElement = class(name){
//   name = this.name;

//   const element = document.createElement(name);
// }

const header = function(){
      //set header div
      const header = document.createElement('div');
      header.className = "header";
      header.textContent += "Restaurant Page"

      //set header children
       
       return header;
}

const main = function(){
  //set main div
  const main = document.createElement('div');
  main.className = "main";

  //set main children
  const siderbar = document.createElement('div');
  const hero = document.createElement('div');
  const mainContent = document.createElement('div');

  siderbar.className = 'sidebar';
  hero.className = 'hero';
  mainContent.className = 'maincontent';

  main.appendChild(siderbar);
  main.appendChild(hero);
  main.appendChild(mainContent); 

  return main;
}


const footer = function(){
    const footer = document.createElement('div');
    footer.className = "footer"
    footer.textContent ="Footer";

    //set footer children

    return footer;
}

const contents = function(){
  const content = document.querySelector('#content');

  const children = [header, main, footer];

  for (let child of children){
    content.appendChild(child());
  }

  return content;

}



export {contents};