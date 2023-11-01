<script setup>
import { ref, computed } from "vue";

const count = ref(1);
const increment = () => {
  return (count.value += 1);
};

const users = ref([
  { id: 1, name: "Alex", age: 30 },
  { id: 2, name: "Tom", age: 15 },
  { id: 3, name: "Din", age: 40 },
]);

const products = ref([
  { nameP: "apple", price: 145 },
  { nameP: "banana", price: 166 },
  { nameP: "pineapple", price: 175 },
  { nameP: "yogurt", price: 145 },
  { nameP: "milk", price: 21 },
  { nameP: "ketchup", price: 10 },
]);

const query = ref("");

// const queryProducts = computed(()=>{
//   return products.value.filter((product)=> product.indexOf(query.value) !== -1)
// });

const queryProducts = computed(() => {
  let prod = products.value;
  let search = query.value;
  if (search) {
    prod = prod.filter(
      (product) =>
        product.nameP.indexOf(search) !== -1 ||
        // product.price.toString().indexOf(search) !== -1
        product.price <= search
    );
  }

  return prod;
});

const reverseQuery = computed(() => {
  return query.value.split("").reverse().join("");
});
</script>

<template>
  <div>
    <div class="bg-primary">
      <button @click="increment">
        Count:
        <strong>{{ count }}</strong>
      </button>

      <ul>
        <li v-for="user in users" :key="user.id" v-show="user.age >= 15">
          {{ user.name }}
          <sup
            v-if="user.name !== 'Tom'"
            :class="{
              red: user.age > 25,
              blue: user.name === 'Din',
            }"
            >{{ user.age }} years
          </sup>
          <sup v-else-if="user.age == 15">{{ user.age }} years - feeftin</sup>
        </li>
      </ul>
      <br />

      <input
        type="search"
        placeholder="search product..."
        class="inputSearch"
        v-model="query"
      />
      <br /><br />
      {{ reverseQuery }}
      <ul>
        <li v-for="product in queryProducts" :key="product" class="productBox">
          {{ product.nameP }}
          <sup>{{ product.price }} $</sup>
        </li>
      </ul>
    </div>

    <ReviewForm/>

  </div>
</template>

<style scoped>
.inputSearch {
  display: block;
  margin: 0 auto;
}
.red {
  color: red;
  background-color: lightcyan;
}

.blue {
  color: blue;
}

.productBox {
  color: brown;
  margin: 1%;
  width: auto;
  text-align: center;
  background-color: lightcyan;
  list-style: none;
}

.productBox:hover {
  background-color: darkblue;
}
</style>
