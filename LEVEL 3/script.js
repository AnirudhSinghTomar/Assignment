const arr = ["p", "button", "button"];
const text = ["Hey this is Anirudh Singh Tomar", "Click to Know me", "By"];
function addtagss(){
  let observer;
        
  if(typeof MutationObserver !== "undefined"){
      observer = new MutationObserver(mutated);
      let config = {
                
          childList: true, 
        
      };
     observer.observe(document.body, config);
  }else{
     document.addEventListener('DOMContentLoaded', init);
  }       
       
  for (let i = 0; i < arr.length; i++) {
   
                var node = document.createElement(arr[i]);
                var textnode = document.createTextNode(text[i]); 
                node.appendChild(textnode);
                var element = document.getElementById("body");
                element.appendChild(node);
            }
 }          
                
        
function inti(e){
               console.log("Added a new node",e.target.tagName)
}
       
        
        
function mutated(mutationList){
               console.log( mutationList );
               for(let mutation of mutationList) {
                  if (mutation.type == 'childList') {
                     console.log('Added a new node');
                  }
                
                }
}
        
