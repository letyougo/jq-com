/**
 * Created by xiaoxiaosu on 16/12/22.
 */

import $ from 'jquery'


var view = function (obj) {
    var that = this
    this.$el = $('<div></div>')
    for(var key in obj){

        view.prototype[key] = obj[key]

    }


    this.mount && this.mount()
}



export default view