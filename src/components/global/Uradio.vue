<template>
  <div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="advice1"
        :value="false"
        v-model="review.isRecommended"
      />
      <label class="form-check-label" for="advice1"> I don't recommend </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="advice2"
        v-model="review.isRecommended"
        :value="true"
      />
      <label class="form-check-label" for="advice2"> I recommend </label>
    </div>
  </div>
</template> 

<script>
export default {};
</script>

<style></style>
