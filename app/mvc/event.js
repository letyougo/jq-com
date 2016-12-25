/**
 * Created by xiaoxiaosu on 16/12/24.
 */
Function.prototype.extends = function (fn) {
    var obj
    if(fn.constructor == Function){
        obj = fn.prototype
    }else {
        obj = fn
    }
    for(var key in obj){
        this.prototype[key] = obj[key]
    }
    return this
}

function Event(){
    this.callback = {}
}

Event.prototype.on = function (type,cb) {

    this.callback[type] = this.callback[type] || []
    this.callback[type].push(cb)
}

Event.prototype.off = function (type) {
    delete this.callback[type]
}

Event.prototype.trigger = function (type) {
    var arg = arguments
    var name = arguments[0]
    Array.prototype.shift.call(arg)
    var fns = this.callback[name]
    var that = this
    fns && fns.map(function (fn) {
        fn.apply(that,arg)
    })
}

export default Event