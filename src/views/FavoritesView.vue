<template>
  <MiniHeader />
  <main>
    <h2>Избранное</h2>
    <PhotoList :list="likedPhotos" isLoading="false" isError="false" />
  </main>
</template>

<script>
import PhotoList from '../components/PhotoList.vue'
import MiniHeader from '@/components/MiniHeader.vue'
import { mapGetters, useStore } from 'vuex'

export default {
  components: {
    MiniHeader,
    PhotoList,
  },
  computed: {
    ...mapGetters('favorites', ['getLikedPhotos']),
    likedPhotos() {
      return this.getLikedPhotos
    }
  }
}
</script>

<style></style>
