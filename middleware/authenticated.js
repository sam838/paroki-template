export default function ({ store, redirect, app }) {
  // If the user is not authenticated
  if (!app.$cookies.get('user-session')) {
    return redirect('/')
  }
}
