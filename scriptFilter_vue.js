Vue.component('filterfield', {
    data() {
        return {
            userSearch: ''
        }
    },
    template:
           `<form action="#" class="header-left search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <input type="text" class="search_input"  name="search" v-model="userSearch">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                 </button>
                
            </form>`
})