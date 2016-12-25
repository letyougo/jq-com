/**
 * Created by xiaoxiaosu on 16/12/24.
 */

import Event from './event'


var Model = function (obj) {
    Event.call(this)
    this.obj = obj
}

Model.extends(Event)
Model.prototype.set = function (key, value) {
    var oldValue = this.obj[key]
    var newValue = value
    this.obj[key] = value
    this.trigger('change',key,oldValue,newValue)
    if(this.parent){
        this.parent.trigger('change',key,oldValue,newValue)
    }
}
Model.prototype.get = function (key) {
    return this.obj[key]
}


export default Model