/**
 * Created by xiaoxiaosu on 16/12/22.
 */

import $ from 'jquery'

import View from './mvc/view.js'
global.$doc = $('#root')



import menu from './menu'
import article from './article'



View.prototype.bind = function (item,type, handler) {
    $doc.delegate(item,type,handler)
}

var a = new View({

    render(){
        this.renderMenu()
        this.renderArticle()
    },

    renderMenu(){
        this.menu.$el.remove()
        this.menu.render()
        this.$el.append(this.menu.$el)
    },

    renderArticle(){
        this.article.$el.remove()
        this.article.render(this.articleList)
        this.$el.append(this.article.$el)
    },

    initialize(){
        this.$el = $doc
        this.menu = menu
        this.article = article

        this.id =

        this.articleList = [
            {title:111,content:222,id:0},
            {title:333,content:444,id:1},
            {title:555,content:666,id:2},
            {title:777,content:888,id:3}
        ]
        this.articleId = 4


        this.render()
        this.initEvent()

    },
    initEvent(){
        var that = this

    }
})



