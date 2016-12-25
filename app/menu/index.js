/**
 * Created by xiaoxiaosu on 16/12/22.
 */
import View from '../mvc/view'
import $ from 'jquery'
import './index.css'



var menu =new View({

    render(){
        this.$el = $(require('./index.ejs')({}))
    },

    initialize(){
        this.render()
        var that = this
        this.bind('.menu-title-item','click',function () {

            var index = $(this).index()
            $(this).addClass('active').siblings().removeClass('active')
            $('.menu-content').find('.menu-content-item').eq(index).addClass('active').siblings().removeClass('active')

            that.trigger('menu-shift',index)
        })


    }
})
console.log(menu)
export default menu