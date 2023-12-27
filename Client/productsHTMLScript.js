const container = document.querySelector(".container");

async function getAllProducts() {
    try {
        let res = await fetch("http://localhost:5000/api/v1/products");
        let products = await res.json();
        console.log(products.data);
        let productsEle = products.data.map((product) => {
            return `
                <div class="row mb-3">
                    <div class="col mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">${product.price}</p>
                                <p class="card-text">${product.description}</p>
                                <p class="card-text">${product.category}</p>
                                <a href="#" class="btn btn-success">More info...</a>
                                <a href="#" class="btn btn-primary">Update</a>
                                <a href="#" class="btn btn-danger" onclick="deleteFun(event)" id=${product._id}>Delete</a>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
        container.innerHTML = productsEle.join(" ");
    }
    catch (error) {
        console.log(error);
    }
}

getAllProducts();

async function deleteFun(event) {
    event.preventDefault();
    console.log(event.target.id);
    if (confirm("Are you sure to delete the product?")) {
        await fetch(`http://localhost:5000/api/v1/products/delete/${event.target.id}`,
            {
                method: "DELETE",
            }
        );
        window.location.reload();
    }
}
