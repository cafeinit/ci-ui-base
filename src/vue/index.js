/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

import CIMedia from './CIMedia.vue'

const CIUIBase = {
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
