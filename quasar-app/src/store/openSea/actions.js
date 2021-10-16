/*
export function someAction (context) {
}
*/
export function setCollectionData({commit}, data) {
  commit('setCollectionData', data)
}
export function setCollectionName({commit}, value) {
  commit('setCollectionName', value)
}
