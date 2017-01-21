/**
 * Created by xiaoxiaosu on 16/12/22.
 */

import view from '../mvc/view'
import $ from 'jquery'
var article = new view({

    render(list){
        this.$el = $(require('./index.ejs')({list}))
    },
    initialize(){
        this.render([])
    }
})

export default article