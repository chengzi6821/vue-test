/*
 * @Descripttion: 
 * @version: 
 * @Author: Dai Junchao
 * @Date: 2020-05-08 22:22:53
 * @LastEditors: Dai Junchao
 * @LastEditTime: 2020-05-08 22:43:29
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: '首页',
        component: Index
    }]
})