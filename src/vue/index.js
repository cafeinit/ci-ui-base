/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

import CIBlock from './CIBlock/CIBlock.vue'
import CIBlockBody from './CIBlock/CIBlockBody.vue'
import CIBlockFooter from './CIBlock/CIBlockFooter.vue'
import CIBlockHeader from './CIBlock/CIBlockHeader.vue'

import CIList from './CIList/CIList.vue'
import CIListBody from './CIList/CIListBody.vue'
import CIListCell from './CIList/CIListCell.vue'
import CIListHeader from './CIList/CIListHeader.vue'

import CIMedia from './CIMedia.vue'

console.log('CIList', CIList)
console.log('CIListBody', CIListBody)

const CIUIBase = {
  CIBlock,
  CIBlockBody,
  CIBlockFooter,
  CIBlockHeader,

  CIList,
  CIListBody,
  CIListCell,
  CIListHeader,

  CIMedia
}

CIUIBase.plugin = plugin

if (window.Vue) {
  Vue.use(plugin)
}

export default CIUIBase

function plugin(Vue) {
  for (let key in CIUIBase) {
    Vue.component(CIUIBase[key].name, CIUIBase[key])
  }
}
