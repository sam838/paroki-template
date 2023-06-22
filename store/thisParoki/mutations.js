export default {
  setParokis (state, value) {
    const keyList = []
    Object.keys(state.detail).forEach((key) => {
      keyList.push(key)
    })
    Object.keys(value).forEach((key) => {
      if (value[key] && keyList.includes(key)) {
        state.detail[key] = value[key]
      }
    })
    state.detail.fetched = true
  }
}
