Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(value) {
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template:
        `<div class="product">
            <product v-for="item of filtered" :key="item.id_product" img="#" :product="item"></product>
         </div>`

});
Vue.component('product', {
    props: ['product', 'img'],
    data() {
        return {
            cartAPI: this.$root.$refs.cart,
        };
    },

    template:
    ` <div class="goods-item">
                    <img class="goods-item-foto" src="#" alt="img">
                    <div class="item-desc">
                        <h3>{{product.product_name}}</h3>
                        <p class="goods-list__price">{{product.price}}</p>
                        <button class="bay-btn" type="button" v-on:click="cartAPI.addProduct(product)">Купить</button>
                    </div>
                </div>`
});