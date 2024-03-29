const container = document.querySelector(".container");

async function getAllProducts() {
    try {
        let res = await fetch("https://prickly-calf-beret.cyclic.app/api/v1/products");
        let products = await res.json();
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
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#product-${product._id}" onclick="displayProduct(event)" id=${product._id}>More info...</button>
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#product-update-${product._id}" id=${product._id}>Update</button>
                    <a href="#" class="btn btn-danger" onclick="deleteFun(event)" id=${product._id}>Delete</a>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="product-${product._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Product Info</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h3>Title: ${product.title}</h3>
                    <h4>Description: ${product.description}</h4>
                    <p>Price: ${product.price}</p>
                    <p>Category: ${product.category}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="product-update-${product._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Update Product</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="#" id="form-update-${product._id}">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="title" name="title" value="${product.title}" />
                            <label for="floatingInput">Product Title</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="floatingInput" placeholder="price" name="price" value="${product.price}" />
                            <label for="floatingInput">Product Price</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="description" name="description" value="${product.description}" />
                            <label for="floatingInput">Product Description</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="category" name="category" value="${product.category}" />
                            <label for="floatingInput">Product Category</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" id=${product._id} onclick="updateProduct(event)">Update</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`;
        });
        container.innerHTML = productsEle.join(" ");
    }
    catch (error) {
        return `<p>{error}</p>`;
    }
}

getAllProducts();

async function deleteFun(event) {
    event.preventDefault();
    if (confirm("Are you sure to delete the product?")) {
        await fetch(`https://prickly-calf-beret.cyclic.app/api/v1/products/delete/${event.target.id}`,
            {
                method: "DELETE",
            }
        );
        window.location.reload();
    }
}

async function displayProduct(event) {
    event.preventDefault();
    let res = await fetch(`https://prickly-calf-beret.cyclic.app/api/v1/products/${event.target.id}`);
    let product = await res.json();
}

async function updateProduct(event) {
    event.preventDefault();
    let updateForm = document.querySelector(`#form-update-${event.target.id}`);
    let res = await fetch(`https://prickly-calf-beret.cyclic.app/api/v1/products/update/${event.target.id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(new FormData(updateForm)),
        }
    );
    if (res.status === 200) {
        alert("Product updated successfully");
        window.location.reload();
    }
}
