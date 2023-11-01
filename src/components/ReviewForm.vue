<script setup>
import { reactive, computed, defineComponent } from "vue";
import axios from "axios";
import PropsChildren from "./global/PropsChildren.vue";

const propname= 'this is props from parent'

const review = reactive({
  author: "",
  stars: null,
  text: "",
  photos: null,
  isRecommended: true,
});

const stars = [1, 2, 3, 4, 5];

const submitForm = () => {
  console.log("submit");
  axios
    .post("/api", review, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const previewFilePath = computed(() => {
  if (review.photos) {
    return URL.createObjectURL(review.photos);
  }

  return "noPhotoLink";
});

const uploadFile = (e) => {
  console.log(e.target.files);
  const [file] = e.target.files;
  review.photos = file;
};
</script>

<template>
  <form class="container pt-5 pb-5" @submit.prevent="submitForm">
    <input
      type="text"
      v-model="review.author"
      placeholder="Your name ?"
      class="form-control"
    />
    <textarea
      v-model="review.text"
      rows="3"
      class="form-control"
      placeholder="What you like, what not?"
    >
    </textarea>

    <h4>Rating</h4>

    <div class="d-flex">
      <div class="form-check" v-for="star in stars" :key="star">
        <label class="form-check-label" :for="`star${star}`">
          {{ star }}
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          :id="`star${star}`"
          :value="star"
          :true-value="star"
          :false-value="null"
          v-model="review.stars"
        />
      </div>
    </div>

    <div class="mb-3 mt-3">
      <label class="form-label">Photo</label>
      <input type="file" class="form-control" @change="uploadFile" />
    </div>

    <img :src="previewFilePath" :alt="'zaeezaaez'" class="w-25" />

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

    <button type="submit" class="btn btn-primary">Confirme !</button>

    <Uinput/>


    <PropsChildren :content='propname'>
      <h1>Some slot information</h1>
      <h4>h4 text</h4>
      {{ propname }}
    </PropsChildren>

    <!-- <child-component :prop-name="propname"></child-component> -->

  </form>
</template>

<style></style>
