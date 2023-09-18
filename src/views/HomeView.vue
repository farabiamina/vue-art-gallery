<template>
  <Header />
  <main>
    <PhotoList :list="photoData" :isLoading="isLoading" :isError="isError" :error="error" />
  </main>
</template>

<script>
import PhotoList from '../components/PhotoList.vue'
import { useGetRandomPhotosQuery } from '../queries/PhotosApi'
import Header from '@/components/Header.vue'

export default {
  components: {
    PhotoList,
    Header,
  },
  data() {
    return {
      photoData: [],
      isLoading: false,
      isError: false,
      error: null
    }
  },
  created() {
    const { isLoading, isError, data, error } = useGetRandomPhotosQuery()
    this.isLoading = isLoading
    this.isError = isError
    this.photoData = data
    this.error = error
  }
}
</script>

<style>

</style>
