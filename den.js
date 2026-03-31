function addPost() {
    let input = document.getElementById("postInput");
    let postText = input.value;

    if (postText.trim() === "") return;

    let postDiv = document.createElement("div");
    postDiv.textContent = postText;
    postDiv.style.padding = "10px";
    postDiv.style.borderBottom = "1px solid #ccc";

    document.getElementById("posts").prepend(postDiv);
    input.value = "";
}

function addItem() {
    let name = document.getElementById("itemName").value;
    let price = document.getElementById("itemPrice").value;

    if (name === "" || price === "") return;

    let itemDiv = document.createElement("div");
    itemDiv.innerHTML = `<strong>${name}</strong> - $${price}`;
    itemDiv.style.padding = "10px";
    itemDiv.style.borderBottom = "1px solid #ccc";

    document.getElementById("market").prepend(itemDiv);
}
