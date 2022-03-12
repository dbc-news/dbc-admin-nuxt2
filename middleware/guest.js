export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    return redirect({
      name: 'index',
      // query: {
      //   redirect: route.fullPath,
      // },
    })
  }
}
