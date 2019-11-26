function addLink() {
    var linkName = document.getElementById('lname').value;
    linkSrc = document.getElementById('linkPath').value;

    var node = document.createElement("li"); // Creates List Node
    var linkNode = document.createElement("a"); // Creates Link Node
    linkNode.setAttribute("href", linkSrc); // Sets linknode's href to a file path input
    var textnode = document.createTextNode(linkName); //Creates a text node

    linkNode.appendChild(textnode); // Appends text node to node
    node.appendChild(linkNode);
    document.getElementById("navList").appendChild(node);

    var navItems = document.querySelectorAll('li');

    var i;
    for (i = 1; i < navItems.length; i++) {
    // Loop through elements
      navItems[i].className = 'navClicked';

    }
}

window.onload = function(){
    var button = document.querySelector('#button');
    button.addEventListener('click', addLink);
}
