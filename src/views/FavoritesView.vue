<template>
  <MiniHeader />
  <main>
    <h1>Избранное</h1>
    <PhotoList :list="$store.getters.getLikedPhotos" :isLoading="false" :isError="false" />
  </main>
</template>

<script>
import PhotoList from '../components/PhotoList.vue'
import MiniHeader from '@/components/MiniHeader.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    MiniHeader,
    PhotoList
  },
//   computed: {
//     ...mapGetters('favorites', ['getLikedPhotos']),
//     likedPhotos() {
//       console.log(this.getLikedPhotos)
//       return this.getLikedPhotos // Use the getter value as likedPhotos
//     }
//   },
  mounted() {
    // console.log(this.$store)
    console.log(this.$store.getters.getLikedPhotos) // Check if it returns an array
  }
}
</script>

<style>
h1 {
    margin: 0 auto;
    text-align: center;
    padding-top: 50px;
}
.photo-list {
    padding-top: 50px;
}
</style>
