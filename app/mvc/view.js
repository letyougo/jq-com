/**
 * Created by xiaoxiaosu on 16/12/24.
 */
import Event from './event'

import $ from 'jquery'


function View(obj) {
    Event.call(this)
    for (var key in obj){
        this[key] = obj[key]
    }
    if(this.initialize){
        this.initialize()
    }

}

View.prototype.bind = function (item, event, hander) {
    $('#root').delegate(item,event,hander)
}

View.extends(Event)

export default View