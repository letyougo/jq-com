var extendfm = function (fn1,fn2) {

    for(var key in fn2.prototype){
        fn1.prototype[key] = fn2.prototype[key]
    }
    fn1.prototype.constructor = fn1
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

var Model = function (obj) {
    Event.call(this)
    this.obj = obj
}

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
Model.prototype.toJSON = function () {
    return Object.assign({},this.obj)
}

var Collection = function (json) {


    Event.call(this)
    this.json = []
    this.reset(json)
    this.trigger('reset',json)
}
Collection.prototype.add = function (obj) {
    var model = new Model(obj)
    model.parent = this
    this.json.push(model)
    this.trigger('add',obj)
}
Collection.prototype.toJSON = function () {
    return this.json.map(function (model) {
        return model.toJSON()
    })
}
Collection.prototype.remove=function (id) {
    var arr = [],
        obj = null
    for(var i=0;i<this.json.length;i++){
        if(this.json[i].id !=id){

            var model = new Model(this.json[i])
            model.parent = this
            this.json.push(model)

            arr.push(model)
        }else {
            obj = this.json[i]
        }
    }
    this.json=arr

    this.trigger('remove',obj)
}

Collection.prototype.get = function (id) {
    for(var i=0;i<this.json.length;i++){
        var model = this.json[i]
        if(model.get('id') == id){
            return model
        }
    }
    return null
}

Collection.prototype.reset = function (json) {
    for(var i=0;i<json.length;i++){
        var model = new Model(json[i])
        model.parent = this
        this.json.push(model)
    }
    this.trigger('reset',json)
}
var View = function(obj) {

    for (var key in obj){
        this[key] = obj[key]
    }
    if(this.initialize){
        this.initialize()
    }
}

extendfm(Collection,Event)
extendfm(Model,Event)
extendfm(Model,View)


var extendObj = function (obj) {
    var parent = this
    var child = function () {
        parent.apply(this,arguments)
    }
    child.prototype = Object.assign({},parent.prototype,obj)
    child.prototype.constructor = child
    return child
}
Collection.extend = Model.extend = View.extend = extendObj

var Backbone = {
    View,Collection,Model
}