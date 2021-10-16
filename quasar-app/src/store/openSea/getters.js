/*
export function someGetter (state) {
}
*/
import {isObject} from "src/utils";

export function assetsData(state) {
  if ('assets' in state.collectionData) {
    return state.collectionData.assets;
  }
  return [];
}

export function lastSaleData(state, getters) {

  if (getters.assetsData.length > 0) {
    return getters.assetsData.map(data => {
      const lastSaleData = data['last_sale'];
      const filteredSaleData = Object.fromEntries(Object.entries(lastSaleData).filter(([k, v]) => !isObject(v)));
      return {
        id: data.id,
        ...filteredSaleData
      }
    });
  }
  return [];


}

