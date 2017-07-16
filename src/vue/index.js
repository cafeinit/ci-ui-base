/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

import CIBlock from './CIBlock/CIBlock.vue'
import CIBlockBody from './CIBlock/CIBlockBody.vue'
import CIBlockFooter from './CIBlock/CIBlockFooter.vue'
import CIBlockHeader from './CIBlock/CIBlockHeader.vue'

import CIMedia from './CIMedia.vue'

const CIUIBase = {
  CIBlock,
  CIBlockBody,
  CIBlockFooter,
  CIBlockHeader,
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
