const state = {
  likedPhotos: JSON.parse(localStorage.getItem('likedPhotos')) || []
}

const mutations = {
  addLike(state, photo) {
    state.likedPhotos.push(photo)
    localStorage.setItem('likedPhotos', JSON.stringify(state.likedPhotos));
  },
  removeLike(state, photo) {
    const index = state.likedPhotos.findIndex((p) => p.id === photo.id)
    if (index !== -1) {
      state.likedPhotos.splice(index, 1)
      localStorage.setItem('likedPhotos', JSON.stringify(state.likedPhotos));
    }
  }
}

const actions = {
  toggleLike({ commit, state }, photo) {
    const isLiked = state.likedPhotos.some((p) => p.id === photo.id)

    if (isLiked) {
      commit('removeLike', photo)
    } else {
      commit('addLike', photo)
    }
  }
}

const getters = {
  getLikedPhotos: (state) => state.likedPhotos
}

export default {
  state,
  mutations,
  actions,
  getters
}
