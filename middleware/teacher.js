export default async function ({ store, redirect, app }) {
  // If the user is not authenticated
  if (app.$cookies.get('user-session')) {
    const token = app.$cookies.get('user-session')
    const getRole = await app.$axios.get(app.$_bu.apiLink('/users/role'), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
    if (getRole.data !== 'teacher') {
      return redirect('/')
    }
  } else {
    return redirect('/')
  }
}
