var xhr 			= new XMLHttpRequest();
var xhr2 			= new XMLHttpRequest();
var xhr3 			= new XMLHttpRequest();
xhr.withCredentials = true;
let syncProducts 	= document.getElementById('syncproducts');
let syncPosts 		= document.getElementById('syncposts');
let syncOrders 		= document.getElementById('syncorders');
let syncMedia 		= document.getElementById('syncmedia');
let productsListed 	= document.getElementById('content');
let postsListed 	= document.getElementById('posts');
let ordersListed 	= document.getElementById('orders')
let subject 		= "";



xhr.addEventListener("readystatechange", function() {

  	if(this.readyState === 4 && this.status === 200) {
		let info = JSON.parse(this.responseText);
		console.log(info)

		productsListed.innerHTML = "";

		let titles = Object.keys(info).length;
		console.log(Object.keys(info));
		for (let i = 0; i < titles; i++) {
			
			let listItem = document.createElement('tr');
			let productImg = info[i].images[0].src;
			let productId = info[i].id;
			let productName = info[i].name;
			let productDescription = info[i].short_description;
			let productPrice = info[i].price;
			listItem.innerHTML = 
			"<tr>" +
			"<td>" + "<img src=" + productImg + " height='auto' width='300px'>" + "</td>" +
			"<td>" + productId + "</td>" + 
			"<td>" + productName + "</td>" + 
			"<td>" + productDescription + "</td>" + 
			"<td>" + productPrice + "<p> kr </p>" + "</td>" + 
			"</tr>" 
			
			console.log(info[i])
			productsListed.appendChild(listItem);
		}
	}	
});

xhr2.addEventListener("readystatechange", function() {

	if(this.readyState === 4 && this.status === 200) {
		let postsinfo = JSON.parse(this.responseText);
		console.log(postsinfo)

		postsListed.innerHTML = "";

		let titlesposts = Object.keys(postsinfo).length;
		for (let i = 0; i < titlesposts; i++) {
			
			let listItemTwo = document.createElement('div');
			let postsTitle = postsinfo[i].title.rendered;
			let postsText = postsinfo[i].content.rendered;
			

			listItemTwo.innerHTML = 
			"<h1>" + postsTitle + "</h1>" + 
			"<p>" + postsText + "</p>" 
			
			postsListed.appendChild(listItemTwo);
			
	  	}
  	}	
});

xhr3.addEventListener("readystatechange", function() {

	if(this.readyState === 4 && this.status === 200) {
		let ordersinfo = JSON.parse(this.responseText);
		console.log(ordersinfo)

		ordersListed.innerHTML = "";

		let titleorders = Object.keys(ordersinfo).length;
		for (let i = 0; i < titleorders; i++) {
			
			let listItemThree = document.createElement('tr');
			let ordersId = ordersinfo[i].id;
			let ordersStatus = ordersinfo[i].status;
			let ordersTotal = ordersinfo[i].total;
			let ordersDate = ordersinfo[i].date_created;
			

			listItemThree.innerHTML = 
			"<tr>" +
				"<td>" + ordersId + "</td>" + 
				"<td>" + ordersStatus + "</td>" +
				"<td>" + ordersTotal+ "</td>" +
				"<td>" + ordersDate + "</td>" +
			"</tr>"
			
			ordersListed.appendChild(listItemThree);
			
	  	}
  	}	
});


syncProducts.addEventListener('click', function() {
	xhr.open("GET", "https://butik.rsodergren.se/wp-json/wc/v3/products");
	xhr.setRequestHeader("Authorization", "Basic Y2tfNTQyYzQyNGQ1MWNjYzJiZjc2OTRmY2JiNWRjZDEyOTFkZTRmNzA1MDpjc182ZmY3NTY4ZjZlYzY2NmQ5YjYyNDUwMDU4YmRlNDk3NjgxOGIzMzIx");
	xhr.send();
});

syncPosts.addEventListener('click', function() {
	xhr2.open("GET", "https://butik.rsodergren.se/wp-json/wp/v2/posts");
	xhr2.setRequestHeader("Authorization", "Basic Y2tfNTQyYzQyNGQ1MWNjYzJiZjc2OTRmY2JiNWRjZDEyOTFkZTRmNzA1MDpjc182ZmY3NTY4ZjZlYzY2NmQ5YjYyNDUwMDU4YmRlNDk3NjgxOGIzMzIx");
	xhr2.send();
});

syncOrders.addEventListener('click', function() {
	xhr3.open("GET", "https://butik.rsodergren.se/wp-json/wc/v3/orders");
	xhr3.setRequestHeader("Authorization", "Basic Y2tfNTQyYzQyNGQ1MWNjYzJiZjc2OTRmY2JiNWRjZDEyOTFkZTRmNzA1MDpjc182ZmY3NTY4ZjZlYzY2NmQ5YjYyNDUwMDU4YmRlNDk3NjgxOGIzMzIx");
	xhr3.send();
});