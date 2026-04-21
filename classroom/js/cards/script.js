const group = document.getElementById("group")
fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        data.products.forEach(axper => {
            group.innerHTML += `
        <div class="card">
            <div class="discount">${axper.discountPercentage}%</div>
            <img src="${axper.thumbnail}" alt=""/>
            <h3>${axper.title}</h3>
            <address>${axper.description}</address>
            <h2>$${axper.price}</h2>
            <h4>${axper.rating}</h4>
            <button class="btn">Subscribe</button>
        </div>
    `
        })
    })


