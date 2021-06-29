let arr = ["p", "button", "li"];
let text = ["Hey this is Anirudh Singh Tomar", "Click to Know me", "By"];
for (let i = 0; i < arr.length; i++) {
    var node = document.createElement(arr[i]);
    var textnode = document.createTextNode(text[i]); // Create a text node
    node.appendChild(textnode);
    var element = document.getElementById("body");
    element.appendChild(node);
    console.log("Added a new node", arr[i]); // Append the text to <li>

}
