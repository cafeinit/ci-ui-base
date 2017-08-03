/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.08.03
 */

import CIBlock from './CIBlock/CIBlock.vue'
import CIBlockBody from './CIBlock/CIBlockBody.vue'
import CIBlockFooter from './CIBlock/CIBlockFooter.vue'
import CIBlockHeader from './CIBlock/CIBlockHeader.vue'

import CICollection from './CICollection/CICollection.vue'
import CICollectionBody from './CICollection/CICollectionBody.vue'
import CICollectionCell from './CICollection/CICollectionCell.vue'
import CICollectionHeader from './CICollection/CICollectionHeader.vue'

import CIImage from './CIImage.vue'

import CIList from './CIList/CIList.vue'
import CIListBody from './CIList/CIListBody.vue'
import CIListCell from './CIList/CIListCell.vue'
import CIListHeader from './CIList/CIListHeader.vue'

import CIMedia from './CIMedia.vue'

const components = [
  CIBlock,
  CIBlockBody,
  CIBlockFooter,
  CIBlockHeader,

  CICollection,
  CICollectionBody,
  CICollectionCell,
  CICollectionHeader,

  CIImage,

  CIList,
  CIListBody,
  CIListCell,
  CIListHeader,

  CIMedia
]

const CIUIBase = {
  name: 'CIUIBase',
  version: '1.2.0',
  plugin: plugin,

  CIBlock,
  CIBlockBody,
  CIBlockFooter,
  CIBlockHeader,

  CICollection,
  CICollectionBody,
  CICollectionCell,
  CICollectionHeader,

  CIImage,

  CIList,
  CIListBody,
  CIListCell,
  CIListHeader,

  CIMedia
}

if (window.Vue) {
  Vue.use(plugin)
}

window.CIUIBase = CIUIBase

export default CIUIBase

function plugin(Vue) {
  for (let key in components) {
    Vue.component(components[key].name, components[key])
  }
}
