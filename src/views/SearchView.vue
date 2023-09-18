<template>
  <Header />
  <main>
    <PhotoList :list="photoData" :isLoading="isLoading" :isError="isError" :error="error" />
    <div class="observer" ref="observer"></div>
  </main>
</template>
<script>
import PhotoList from '../components/PhotoList.vue'
// import { useSearchPhotosQuery } from '../queries/PhotosApi'
// import { useQuery } from 'vue-query'
import { endpoint } from '../queries/PhotosApi'
import Header from '@/components/Header.vue'
// import { ref, watch, onMounted, computed } from 'vue'
// import { useRoute } from 'vue-router'

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
      error: null,
      page: 1,
      totalPages: 0
    }
  },
  computed: {
    query() {
      return this.$route.query.q
    }
  },
  methods: {
    async fetchPhotos() {
      try {
        this.page += 1
        if (this.query === '') return
        const response = await fetch(
          endpoint('search/photos?page=' + this.page + '&per_page=9&query=' + this.query + '&')
        )
        const data = await response.json()
        this.totalPages = data.total_pages
        this.photoData = [...this.photoData, ...data.results]
      } catch (error) {
        this.isError = true
        this.error = error
      }
    }
  },
  watch: {
    query() {
      this.photoData = []
      this.fetchPhotos()
    }
  },
  mounted() {
    this.fetchPhotos()
    let options = {
      rootMargin: '0px',
      threshold: 0.1
    }

    let callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.fetchPhotos()
      }
    }
    let observer = new IntersectionObserver(callback, options)
    observer.observe(this.$refs.observer)
  }
  //   setup() {
  //     const query = ref('')
  //     const queryKey = ref(0)
  //     const route = useRoute()

  //     onMounted(() => {
  //       watch(
  //         () => route.value.query.q,
  //         (newQuery) => {
  //           console.log(newQuery)
  //           query.value = newQuery
  //           queryKey.value++
  //         }
  //       )
  //     })

  //     const {
  //       data: photoData,
  //       isLoading,
  //       isError,
  //       error
  //     } = useQuery(['searchPhotos', queryKey], () => {
  //       if (query.value === '') return
  //       return fetch(endpoint('search/photos?page=1&query=' + query.value + '&'))
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error('Не получилось найти фотографии')
  //           }
  //           return response.json()
  //         })
  //         .then((data) => data.results)
  //     })

  //     return {
  //       photoData,
  //       isLoading,
  //       isError,
  //       error
  //     }
  //   }
  //   data() {
  //     return {
  //       photoData: [],
  //       isLoading: false,
  //       isError: false,
  //       error: null
  //       //   query: ''
  //     }
  //   },
  //   computed: {
  //     query() {
  //       return this.$route.query.q
  //     }
  //   },
  //   watch: {
  //     query(newQuery) {
  //       console.log('New query:', newQuery)
  //     }
  //   },
  //   created() {
  //     const { isLoading, isError, data, error } = useSearchPhotosQuery(this.query)
  //     this.isLoading = isLoading
  //     this.isError = isError
  //     this.photoData = data || []
  //     this.error = error
  //   },
  // setup() {
  //     const query = ref('')
  //     const route = useRoute()

  //     const queryKey = computed(() => ['searchPhotos', query.value])

  //     const {
  //       data: photoData,
  //       isLoading,
  //       isError,
  //       error
  //     } = useQuery(queryKey, async () => {
  //       if (query.value === '') return
  //       const response = await fetch(endpoint(`search/photos?page=1&query=${query.value}&`))
  //       if (!response.ok) {
  //         throw new Error('Не получилось найти фотографии')
  //       }
  //       const data = await response.json()
  //       return data.results
  //     })

  //     watch(
  //       () => route.value.query.q,
  //       (newQuery) => {
  //         console.log('New query:', newQuery)
  //         query.value = newQuery
  //       }
  //     )

  //     return {
  //       photoData,
  //       isLoading,
  //       isError,
  //       error
  //     }
  //   }
}
</script>

<style>
.observer {
  height: 10px;
}
</style>
