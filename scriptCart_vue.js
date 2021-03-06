Vue.component('cart', {
    data(){
        return {
            showCart: false,
            cartUrl: '/getBasket.json',
            cartItems: [],
        }
    },
    methods: {
        addProduct(product) {
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++;
                        }else{
                            let prod = Object.assign({quantity: 1}, product);
                            this.cartItems.push(prod)
                        }
                    } else {
                        alert('Error');
                    }
                })
        },
        remove(item) {
            this.$parent.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1)
                        }
                    }
                })
        },
    },
    mounted() {
        this.$parent.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            });
    },
    template:
        `<div>
            <button class="btn-cart"  type="button" v-on:click="showCart = !showCart">Корзина</button>
            <div class="cart-block" v-show="showCart">
                <p v-if="!cartItems.length" >В корзине нет ни одного товара</p>
                <cart-item class="cart-item" 
                           v-for="item of cartItems" 
                           :key="item.id_product"
                           :cart-item="item"
                            @remove="remove">
                </cart-item>
             </div>              
        </div>`
});
Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `
       <div class="cart-item">
                        <div class="product-bio">
                            <img class="cartBox__img" src="#"  alt="img">
                            <div class="product-desc">
                                <p class="product-title">{{cartItem.product_name}}</p>
                                <p class="product-quantity">Количество: {{cartItem.quantity   }}</p>
                                <p class="product-single-price">{{cartItem.price   }} рублей </p>
                            </div>
                        </div>
                        <div class="right-block">
                                <p class="product-price">{{cartItem.quantity*cartItem.price}} руб.</p>
                                <button class="del-btn" @click="$emit('remove', cartItem)">x</button>
                        </div>                 
       </div>`
});