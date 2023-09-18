<template>
  <div class="inner">
    <Spinner v-if="isLoading" />
    <span v-else-if="isError">Error: {{ error.message }}</span>
    <div v-else class="photo-list">
      <RouterLink
        class="photo-item"
        v-for="photo in list"
        :to="`/photos/${photo.id}`"
        :key="photo.id"
        :style="`background-image: url('${photo.urls.regular}');`"
      ></RouterLink>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/icons/IconSpinner.vue'
export default {
  components: {
    Spinner
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
.photo-list {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  padding: 100px 0;
}

.photo-item {
  width: 30%;
  height: 0;
  padding-bottom: 25%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
</style>
