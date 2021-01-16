const product = {
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
};
const products = {
    component: {product},
    data() {
        return {
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
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

};
export default products;
