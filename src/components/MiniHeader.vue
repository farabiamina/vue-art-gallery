<script>
import HeaderLogo from '@/components/icons/IconHeaderLogo.vue'
import HeartIcon from '@/components/icons/IconHeart.vue'
import SearchIcon from '@/components/icons/IconSearch.vue'

export default {
  components: {
    HeaderLogo,
    SearchIcon,
    HeartIcon
  },
  data() {
    return {
      query: ''
    }
  },
  methods: {
    search() {
      if (this.query !== '') {
        this.$router.push({ path: '/search', query: { q: this.query } })
      }
    }
  }
}
</script>

<template>
  <header>
    <div class="inner">
      <RouterLink to="/"><HeaderLogo class="logo" /></RouterLink>
      <nav>
        <RouterLink to="/search" class="link">
          <SearchIcon fillColor="white" class="heart icon" />
          <span>Поиск</span>
        </RouterLink>
        <RouterLink to="/favorites" class="link">
          <HeartIcon fillColor="white" class="heart icon" />
          <span>Избранное</span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #000;
}
.logo {
  width: 13%;
  min-width: 110px;
  cursor: pointer;
}
nav {
  display: flex;
  gap: 20px;
}
.inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
}
span {
  color: #fff;
  font-size: 18px;
}
.link {
  display: flex;
  align-items: center;
  gap: 10px;
}
.icon {
  width: 23px;
  display: block;
}
.search {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/HeaderBg.jpeg);
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 16px solid #c4c4c4;
}
.input-con {
  width: 60%;
  display: flex;
  background-color: #fff;
}
input {
  width: calc(100%);
  outline: none;
  border: none;
  padding: 21px 39px;
  font-size: 24px;
}
button {
  padding-right: 39px;
  border: none;
  background-color: transparent;
}
</style>
