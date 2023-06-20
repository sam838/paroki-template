export default {
  setProfile (state, value) {
    const keyList = []
    Object.keys(state.profile).forEach((key) => {
      keyList.push(key)
    })
    Object.keys(value).forEach((key) => {
      if (value[key] && keyList.includes(key)) {
        state.profile[key] = value[key]
      }
    })
    state.profile.fetched = true
  },

  setFullName (state, value) {
    state.profile.fullName = value
  },

  setRoles (state, value) {
    state.profile.roles = value
  },

  setEmail (state, value) {
    state.profile.email = value
  },

  setPhone (state, value) {
    state.profile.phoneNumber = value
  },

  setUjianDoneList (state, value) {
    state.profile.ujianDoneList = value
  },

  setinnerQuestionList (state, value) {
    state.profile.innerQuestionList = value
  }
}
