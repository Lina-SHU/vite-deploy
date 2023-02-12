<template>
  <div class="bg-light my-4 p-4">
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div>
    <!-- v-if -->
    <!-- v-else -->
    <table v-else class="table align-middle">
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id">
          <td width="100">
            <a
              href="#"
              class="text-dark text-decoration-none"
              @click.prevent="removeCartItem(item.id)"
              >x</a
            >
          </td>
          <td width="100">
            <img :src="item.product.imageUrl" alt="product" class="table-img" />
          </td>
          <td>{{ item.product.title }}</td>
          <td>
            <select
              class="form-select"
              :value="item.qty"
              @change="(evt) => setCartQty(item.id, evt)"
            >
              <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
            </select>
          </td>
          <td class="text-end">$ {{ item.subtotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額 NT$ {{ cartList.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import cartStore from "../stores/cartStore.js";
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
  methods: {
    ...mapActions(cartStore, ["removeCartItem", "setCartQty"]),
  },
};
</script>
