/* import axios from 'axios'

// nuxt middleware
export default ({ app }) => {
    const cookieRes = app.$cookies.get('user-session')
    if(cookieRes){
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + cookieRes
        }
        return axios.get('http://localhost:3001/api/user/me', {
                    headers: headers
                })
                .then(response => {
                //   store.commit('setSession', response)
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error)
                //   store.commit('clearSession')
                })
    }
    else{

    }
} */

export default function ({ store, redirect, app }) {
  // If the user is authenticated redirect to home page
/*     if (store.state.users.auth) {
      return redirect('/')
    } */
  if (app.$cookies.get('user-session')) {
    return redirect('/')
  }
}
