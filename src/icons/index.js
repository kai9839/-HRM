import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon) // 全局注册

// require.context（目标目录, 是否扫描子目录, 扫描哪些种文件） 扫描目录中的文件
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
// map是循环每一项 svg图片 map{ () => {} }
// req函数能够引用图片到项目中
requireAll(req)
