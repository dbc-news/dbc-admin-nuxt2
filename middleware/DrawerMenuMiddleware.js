export default function (context) {
  const { route, store } = context

  if (store.state.drawer.isOpen) {
    // if (route.path !== '/') {
    store.dispatch('drawer/close')
    // }
  }
}
