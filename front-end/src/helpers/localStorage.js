class LocalCart {
  isExist = (id) => !!this.getItem(id);

  getItems = () => JSON.parse(localStorage.getItem("cart")) || [];

  getItem = (id) =>
    this.getItems().find((product) => product.product_id === id);

  saveItems = (data) => localStorage.setItem("cart", JSON.stringify(data));

  removeItem = (id) =>
    this.saveItems(
      this.getItems().filter((product) => product.product_id !== id)
    );

  incrementQuantity = (id) =>
    this.saveItems(
      this.getItems().map((prod) => {
        if (id === prod.product_id) {
          prod.quantity += 1;
          prod.subtotal = prod.price * prod.quantity;
        }
        return prod;
      })
    );

  decrementQuantity = (id) =>
    this.saveItems(
      this.getItems().map((prod) => {
        if (id === prod.product_id) {
          if (prod.quantity === 0) {
            prod.quantity = 0;
          } else {
            prod.quantity -= 1;
          }
          prod.subtotal = prod.price * prod.quantity;
        }
        return prod;
      })
    );

  addItem = (product, quantity) => {
    console.log(quantity)
    if (this.isExist(product.id)) {
      this.saveItems(
        this.getItems().map((prod) => {
          if (product.product_id === prod.id) {
            prod.quantity += quantity || 1;
          }
          return prod;
        })
      );
    } else {
      product.quantity = 1;
      product.subtotal = product.price;
      this.saveItems([...this.getItems(), product]);
    }
    //localStorage.setItem(product, JSON.stringify(quantity))
  };

  clearCart = () => localStorage.removeItem("cart")
}

export default new LocalCart();