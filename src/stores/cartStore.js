import productsStore from "./productsStore.js";
import { defineStore } from "pinia";

export default defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(productId, qty = 1) {
      const currentCart = this.cart.find(
        (item) => item.productId === productId
      );

      if (currentCart) {
        currentCart.qty += qty;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty,
        });
      }
    },
    setCartQty(id, event) {
      console.log(event);
      const currentCart = this.cart.find((item) => item.id === id);
      currentCart.qty = event.target.value * 1; // 字串透過乘以數字轉型成數字
    },
    removeCartItem(id) {
      const idx = this.cart.findIndex((item) => item.id === id);
      this.cart.splice(idx, 1);
    },
  },
  getters: {
    cartList: ({ cart }) => {
      const { products } = productsStore();

      const carts = cart.map((item) => {
        const product = products.find((prd) => prd.id === item.productId);

        return {
          ...item,
          product,
          subtotal: product.price * item.qty,
        };
      });

      const total = carts.reduce((a, b) => a + b.subtotal, 0);
      return {
        carts, // 列表
        total,
      };
    },
  },
});
