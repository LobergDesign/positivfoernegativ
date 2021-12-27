
// craeate anoother state, is route changed, to check for page transitions - and item is in view
// On route chamge, check if application is ready AND route animation is done.
// On page load, check if application is ready
export const state = () => ({
  isApplicationReady: false
})

export const mutations = {
  initApplication(state: Application.IApplicationState) {
    state.isApplicationReady = true
  }
}