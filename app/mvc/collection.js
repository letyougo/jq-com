/**
 * Created by xiaoxiaosu on 16/12/24.
 */

import Event from './event'

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


Collection.extends(Event)

export default Collection