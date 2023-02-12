<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import ProductComponent from "./components/ProductsComponent.vue";
import CartComponent from "./components/CartComponent.vue";

export default {
  components: {
    NavbarComponent,
    ProductComponent,
    CartComponent
  }
}
</script>

<template>
  <div class="container">
    <NavbarComponent></NavbarComponent>
    <CartComponent></CartComponent>
    <ProductComponent></ProductComponent>
  </div>
</template>

<style lang="scss">
@import "./assets/all.scss";

.table-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
