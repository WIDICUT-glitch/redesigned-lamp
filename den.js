// Load data when page opens
window.onload = function () {
    loadPosts();
    loadItems();
};

// ================= POSTS =================

function addPost() {
    let input = document.getElementById("postInput");
    let postText = input.value;

    if (postText.trim() === "") return;

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.unshift(postText); // add to top
    localStorage.setItem("posts", JSON.stringify(posts));

    input.value = "";
    loadPosts();
}

function loadPosts() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let postContainer = document.getElementById("posts");

    postContainer.innerHTML = "";

    posts.forEach(post => {
        let div = document.createElement("div");
        div.textContent = post;
        div.style.padding = "10px";
        div.style.borderBottom = "1px solid #ccc";
        postContainer.appendChild(div);
    });
}

// ================= ITEMS =================

function addItem() {
    let name = document.getElementById("itemName").value;
    let price = document.getElementById("itemPrice").value;

    if (name === "" || price === "") return;

    let items = JSON.parse(localStorage.getItem("items")) || [];

    items.unshift({ name, price });
    localStorage.setItem("items", JSON.stringify(items));

    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";

    loadItems();
}

function loadItems() {
    let items = JSON.parse(localStorage.getItem("items")) || [];
    let market = document.getElementById("market");

    market.innerHTML = "";

    items.forEach(item => {
        let div = document.createElement("div");
        div.innerHTML = `<strong>${item.name}</strong> - $${item.price}`;
        div.style.padding = "10px";
        div.style.borderBottom = "1px solid #ccc";
        market.appendChild(div);
    });
}
