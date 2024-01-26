const title = function(){
        const title = document.createElement('div');
        title.textContent += "Hello world"
        // document.body.appendChild(component());
       
       return title;
     }

const footer = function(){
    const footer = document.createElement('div');
    footer.textContent ="i am a footer";

    return footer;
}

export {title};