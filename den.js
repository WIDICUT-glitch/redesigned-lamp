// Social posts
function addPost() {
    let input = document.getElementById("postInput");
    let postText = input.value;

    if (postText === "") return;

    let postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerText = postText;

    document.getElementById("posts").appendChild(postDiv);

    input.value = "";
}

// Marketplace items
function addItem() {
    let name = document.getElementById("itemName").value;
    let price = document.getElementById("itemPrice").value;

    if (name === "" || price === "") return;

    let itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.innerHTML = `<strong>${name}</strong> - $${price}`;

    document.getElementById("market").appendChild(itemDiv);

    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
}
