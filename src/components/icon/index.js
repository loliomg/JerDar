import Vue from 'vue'
import Icon from '@/components/icon/this' // SVG组件

Vue.component('isIcon', Icon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../../assets/icon', false, /\.svg$/)
requireAll(req)