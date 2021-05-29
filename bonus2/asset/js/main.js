const app = new Vue({
    el: '#app',
    data: {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        response: '', //include tutto l'oggetto
        generi: [],
        genereSelezionato: '',
    },
    methods: {
        getGenere() {
            let ele = []
            for (let index = 0; index < this.response.length; index++) {
                ele.push(this.response[index].genre)
                //console.log(ele);
            }
            this.generi = ele.filter((el, index) => {
                return ele.indexOf(el) === index;
            })//ordina per anno
            this.response.sort((a, b) => (a.year < b.year ? -1 : Number(a.year > b.year)))
        },


    },
    mounted() {
        axios
            .get(this.url)
            .then(resp => {
                this.response = resp.data.response;
                //console.log('stampa risposta', resp);
            })
            .catch(e => {
                console.error(e);
            })
    }
});
