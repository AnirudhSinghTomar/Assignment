
const arr = ["p", "button", "li"];
const text = ["Hey this is Anirudh Singh Tomar", "Click to Know me", "By"];

let observer;
        
        document.addEventListener('DOMContentLoaded', init);
        
        function init(){
            for (let i = 0; i < arr.length; i++) {
   
                var node = document.createElement(arr[i]);
                var textnode = document.createTextNode(text[i]); 
                node.appendChild(textnode);
                var element = document.getElementById("body");
                element.appendChild(node);
            }
            
            let config = {
                
                childList: true, 
                
            };
        
            
            observer = new MutationObserver(mutated);
            observer.observe(document.body, config);
        }
        
        
        
       
        
        
        function mutated(mutationList){
            console.log( mutationList );
            for(let mutation of mutationList) {
                if (mutation.type == 'childList') {
                    console.log('Added a new node');
                }
                
            }
        }

