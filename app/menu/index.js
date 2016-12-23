/**
 * Created by xiaoxiaosu on 16/12/22.
 */
import view from '../mvc/view'

var menu = new view({
    render(){

        this.$el = require('./index.ejs')({name:111,age:222})
    },
    mount(){
        this.render()
    }
})

export default menu