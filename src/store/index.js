import Vue from "vue";
//引入vuex插件
import Vuex from "vuex";
Vue.use(Vuex);


//将购物车的信息存储到localstorage中

//读取信息
function readCartsFromStorage() {
    var cartsStr = localStorage.getItem( "carts-info" );
    if( cartsStr == null || cartsStr.trim() == "" ) {
        return []
    } else {
        return JSON.parse( cartsStr );
    }   
}

//写入信息
function writeCartsFromStorage( carts ) {
    localStorage.setItem( "carts-info", JSON.stringify( carts ));
}

export default new Vuex.Store({
    state: {
        carts: readCartsFromStorage()
    },
    getters: {
        totalCount: state => {

            // console.log(state.carts);
            var result = 0;
            state.carts.forEach(v => {
                result += v.count;
            })
            return result;
        },
        getIds: state => {
            return state.carts.map( v => v.id ).join( ',' );
        },
        //根据id获取数量
        getCountById: state => id => {
            var temp = state.carts.find( v => v.id == id);
            return temp.count;
        }

    },
    mutations: {
        addToCarts( state, cart ) {
            // console.log(cart);
            // state.carts.push(cart);
            // 如果购物车中已经有了对应的商品信息，那就让数量累加
            // 如果没有，那就新增一个对象
            let temp = state.carts.find( v => {
                return v.id == cart.id
            })

            if(temp) {
                temp.count += cart.count;
            } else {
                state.carts.push( cart ); 
            }
            //当属组中的购物车信息更新之后，将其更新到localstorage中
            writeCartsFromStorage( state.carts );
        },
        updateCarts( state, cartsList ) {
            // console.log(cartsList);
            // 这个方法中，接收了到购物车页面中有数量的数组
            // 我们把数组进行遍历，找到每一项对应的vuex中的购物车信息
            // 更新count即可
            cartsList.forEach( v => {
                let cart = state.carts.find( e => {
                    return e.id == v.id;
                })
                cart.count = v.count;
            })
            //更新到localstorage中
            writeCartsFromStorage(state.carts);
        }
    }
})