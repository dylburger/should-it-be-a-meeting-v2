export const state = () => ({
  show: true,
})

export const mutations = {
  close(state) {
    state.show = false
  },
  open(state) {
    state.show = true
  },
}
