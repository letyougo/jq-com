/**
 * Created by xiaoxiaosu on 16/12/22.
 */

import $ from 'jquery'
import view from './mvc/view.js'



// var root = window.root = {}
//
//
import menu from './menu'

global.$doc = $("#root")

var app =new view({
    mountTo:'#root',

    render(){
        this.$el.append(menu.$el)
        $doc.append(this.$el)

    },

    mount(){
        this.render()
    },
})

