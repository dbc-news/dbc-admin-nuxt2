export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    return redirect({
      name: 'auth-signin',
      query: {
        redirect: route.fullPath,
      },
    })
  }
}
