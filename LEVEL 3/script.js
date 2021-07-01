const arr = ["p", "button", "button"];
const text = ["Hey this is Anirudh Singh Tomar", "Click to Know me", "By"];

let observer;
        
        document.addEventListener('DOMContentLoaded', init);
        
        function init(){
            let p = document.querySelector('body'); 
            p.addEventListener('click', change);
            
            let config = {
                
                childList: true, 
               
            };
          
            
            observer = new MutationObserver(mutated);
            observer.observe(p, config);
        }
        
        
        
        function change(ev){
            
            for (let i = 0; i < arr.length; i++) {
                // let p = ev.currentTarget;
                var node = document.createElement(arr[i]);
                var textnode = document.createTextNode(text[i]); 
                node.appendChild(textnode);
                var element = document.getElementById("body");
                element.appendChild(node);
            }
        }
        
        
        
        
        function mutated(mutationList){
            Array.prototype.forEach.call(mutationList,function (data){
                let newnodes = data.addedNodes;
                Array.prototype.forEach.call(newnodes,function (newN){
                    console.log("Added a new node",newN.tagName);
                } )
            })
}
  
