<template>
  <MiniHeader />
  <main>
    <div class="bg" :style="`background-image: url('${photo.urls.regular}');`"></div>
    <div class="inner">
      <div class="info">
        <div class="name-con">
          <span class="name">{{ photo.user.name }}</span>
          <span class="username">@{{ photo.user.username }}</span>
        </div>
        <div class="btns">
          <button class="fav" @click="toggleLike">
            <HeartIcon class="icon" :fillColor="isLiked ? 'red' : 'black'" />
          </button>
          <button class="download">Download</button>
        </div>
      </div>
      <div class="img" :style="`background-image: url('${photo.urls.regular}');`"></div>
    </div>
  </main>
</template>

<script>
import { useGetPhotoQuery } from '../queries/PhotosApi'
import MiniHeader from '../components/MiniHeader.vue'
import HeartIcon from '@/components/icons/IconHeart.vue'

export default {
  components: {
    HeartIcon,
    MiniHeader
  },
  data() {
    return {
      photo: null,
      isLoading: false,
      isError: false,
      error: null,
      isLiked: false
    }
  },
  computed: {
    photoId() {
      return this.$route.params.id
    },
    isLiked() {
      return this.$store.getters.getLikedPhotos.some((p) => p.id === this.photo.id)
    }
  },
  created() {
    const { isLoading, isError, data, error } = useGetPhotoQuery(this.photoId)
    this.isLoading = isLoading
    this.isError = isError
    this.photo = data
    this.error = error
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked
      this.$store.dispatch('toggleLike', this.photo)
    }
  }
}
</script>

<style scoped>
.search {
  display: none;
}
main {
  position: relative;
  padding-bottom: 100px;
}
.bg {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 0;
  padding-bottom: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(4px) grayscale(100%);
  backdrop-filter: blur(4px);
  z-index: -1;
}
.inner {
  padding-top: 40px;
}
.img {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 0;
  padding-bottom: 62%;
}
span {
  color: white;
  display: block;
  line-height: 100%;
  font-weight: 300;
}
.name {
  font-size: 30px;
}
.username {
  font-size: 16px;
}
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 40px;
}
.icon {
  width: 20px;
}
.fav {
  border-radius: 8px;
  padding: 10px 12px;
  background-color: white;
  border: 1px solid white;
  margin-right: 10px;
}
.download {
  font-size: 20px;
  margin-left: 10px;
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #fff200;
  background: #fff200;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
