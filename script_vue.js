Vue.component('main-page', {
    template: `<div>
          <header>
            <div class="header container">
               <div class="header_menu">
                  <form class="header-left"><search v-on:search="filter"/></form>
                  <div class="header-right"><busket/></div>
               </div>  
            </div>
          </header>
          <main>
             <catalogue :items="items"/>          
          </main>
    </div>`,
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
    data() {
        return {
            items: [],
            searchText: ''
        };
    },
    computed: {
        filteredItems() {
           return this.searchText.length > 0 ?
               this.items.filter(({product_name}) => product_name.includes(this.searchText)) :
               this.items;
        }
    },

    method: {
        filter(text) {
            this.searchText = text;
            console.log('catch emit', text);
        }
    }
});

Vue.component('search', {
    template:
        `<label>
            <input type="text" v-model="search"/>
            <span @click="() => $emit('search', search)">search</span>
        </label>`,
    data() {
        return {
            search: ''
        };
    }

});
Vue.component('busket', {
    template: `
    <a href="#">
           
       <button class="cart_button"  type="button">Корзина</button>
           
    </a>`
});

Vue.component('catalogue', {
    template: `<section class="catalogue">
                  <catalogue-item v-for="(item, id) of items" 
                   :key="\`catalog_item_\${id}\`"
                   :img="item.img"
                   :product_name="item.product_name"
                   :price="item.price"/>
               </section>`,
    props: {
        items: {
            type: Array,
            required: false,
            default: () => []
        }
    },

});
Vue.component('catalogue-item', {
    template: `<div class="goods-item">
                      <img class="goods-item-foto" src="#" alt="foto">
                      <div class="goods-item-info">
                         <h3 class="goods-item-info_name">{{product_name}}</h3>
                         <p class="goods-item-info_price">{{price}}</p>
                         <button class="main-button" type="button">Купить</button>
                      </div>
                   </div>`,
    props: ['img', 'product_name', 'price']
})


const app = new Vue({
    el: '#root',
    data: {
        str: 'Us Shop',
        name: '',
    },
});