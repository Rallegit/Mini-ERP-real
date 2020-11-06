let request = new XMLHttpRequest();
let syncProducts = document.getElementById('syncproducts');
let syncPosts = document.getElementById('syncposts');
let syncOrders = document.getElementById('syncorders');
let syncMedia = document.getElementById('syncmedia');
let productsListed = document.getElementById('content');
let subject = "";


request.onreadystatechange = function() {
	if (this.readyState === 4 && this.status === 200) {
        let info = JSON.parse(this.responseText);
		console.log(info)
		
        if (subject === "content") {
			productsListed.innerHTML = 
			"<h1>Plot:</h1>" +
			"<tr>" + info.price + "</tr>" 
		}
	}
}
		
syncProducts.addEventListener("click", function(){
	subject = this.id;
	request.open("GET", "https://butik.rsodergren.se/wp-json/wc/v3/products/94");
	request.send();
});



