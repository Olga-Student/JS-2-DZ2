const error = {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        setError(error){
            this.text =error
        }
    },
    computed: {
        isVisible(){
            return this.text !== ''
        }
    },
    template:
    `<div class="error-block" v-if="isVisible">
       <p class="error-attention">
           <button class="'error-btn" @click="setError('')">x</button>
           {{text}}
       </p>
    </div>`
};
export default error;