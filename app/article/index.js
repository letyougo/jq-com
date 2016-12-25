/**
 * Created by xiaoxiaosu on 16/12/22.
 */

import view from '../mvc/view'
import $ from 'jquery'
var article = new view({

    render(list){
        this.$el = $(require('./index.ejs')({list}))
    },

    initEvent(){
        var that = this
        this.bind('.article-submit','click',function () {

            var title = $(".article-add-title").val()
            var content = $('.article-add-content').val()

            that.trigger('article-add',{title,content})

        })

        this.bind('.article-item-delete','click',function () {
            var id = $(this).data('id')
            that.trigger('article-delete',id)
        })
    },

    initialize(){

        this.render([])
        this.initEvent()


    }
})

export default article