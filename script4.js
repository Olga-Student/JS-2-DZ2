'use strict'
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#root',
    data: {
        str: 'Us Shop',
        name: '',
        searchLine: '',
        secondname: '',
        items: [],
        products: [],
        cartItems: [],
        showCart: false,
           },
    computed: {
        title(){
           return  'Hello!' + this.secondname;
        }
    },
    methods: {
        clear() {
            this.name = '';
            this.secondname = '';
        },
        getData() {
            fetch(
                'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
                {
                    method: 'GET',
                    header: {},
                }
            ).then(res => res.json()).then(res => {
                this.items = res;
            });
        },
        addProduct(item) {
            this.getJson('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/addToBasket.json')
                .then(data => {
                    if (date.result === 1) {
                        let find = this.cartItems.find(el =>el.id_product === item.id_product);
                        if (find) {
                            find.quantity++;
                        }else{
                            let prod = Object.assign({quantity: 1}, item);
                            this.cartItems.push(prod)
                        }
                    } else {
                        alert('Error');
                    }
                })
            },
        remove(product) {
            this.getJson('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/deleteFromBasket.json')
                .then(data => {
                    if (data.resalt === 1) {
                        if (product.quantity > 1) {
                            product.quantity--;
                        }else{
                            this.cartItems.splice(this.cartItems.indexof(item), 1)
                        }
                    }
                })
        },
        filteredGoods() {
            return this.searchLine.length > 0 ?
                this.items.filter(({product_name}) => product_name.includes(this.searchLine)) :
                this.items;
        },
        Data() {
            fetch(
                'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json',
                {
                    method: 'GET',
                    header: {},
                }
            ).then(res => res.json()).then(res => {
                this.cartItems = res;
            });
        },
    }




    });
console.log(app);