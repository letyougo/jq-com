/**
 * Created by xiaoxiaosu on 16/12/24.
 */


import $ from 'jquery'


function View(obj) {

    for (var key in obj){
        this[key] = obj[key]
    }
    if(this.initialize){
        this.initialize()
    }

}

View.prototype.bind = function (item, event, hander) {
    $('body').delegate(item,event,hander)
}


export default View