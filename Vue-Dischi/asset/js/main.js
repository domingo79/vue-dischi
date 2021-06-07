const app = new Vue({
    el: '#app',
    data: {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        response: '', //include tutto l'oggetto
        error: []

    },
    methods: {},
    mounted() {
        axios
            .get(this.url)
            .then(resp => {
                this.response = resp.data.response
                console.log('stampa risposta', resp);
            })
            .catch(e => {
                console.error(e);
                this.error.push(e);
            })

    }
});