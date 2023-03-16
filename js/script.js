/*
Ciao ragazzi,
Esercizio di oggi: Vue Slider
nome repo: vue-slider
Descrizione
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus
al click su una thumb, visualizzare in grande l’immagine corrispondente
applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
Consigli del giorno
Regola d’oro: riciclare ovunque possibile!
Questo significa che per la parte di markup possiamo recuperare html e css dell’esercizio svolto qualche giorno fa: è già tutto pronto!
il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l’esercizio si riduce a poche righe :occhiolino:
Inserite comunque un file README.md che descrive la vostra app. (titolo, descrizione).
Buon lavoro e buon divertimento! (modificato) 
*/

const { createApp } = Vue;
// const createApp = Vue.createApp;

const myApp = createApp({
    data() {
        return {
            testRoy: null,
            currentSlide: 0,
            timeOutTime: 3, //sc
            currentInterval: null, //intervallo di autoplay
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        };
    },
    methods: {
        isActive(i) {
            //esempio di metodo per la visualizzazione della classe active
            if (i === this.currentSlide) {
                return 'active';
            }
        },
        prevSlide() {
            this.currentSlide--;
            if (this.currentSlide < 0) {
                this.currentSlide = this.slides.length - 1;
            }
        },
        nextSlide: function () {

            console.log(this.testRoy);
            this.currentSlide++;
            // this.currentSlide += 1;
            // this.currentSlide = this.currentSlide + 1;

            if (this.currentSlide > this.slides.length - 1) {
                this.currentSlide = 0;
            }
        
        },
        stopAutoPlay() {
            clearInterval(this.currentInterval);
        },
        startAutoPlay() {
            this.currentInterval = setInterval(this.nextSlide, this.timeOutTime * 1000);
        }

    },
    // beforeCreate(){
    //     console.log('beforeCreate');
    //     console.log(this.name);
    // },
    // created(){
    //     console.log('created');
    //     console.log(this.name);
    // },
    // beforeMount(){
    //     console.log('beforeMount');
    //     console.log(this.name);
    // },
    mounted() {
        //console.log(this);
        // let self = this;
        // setInterval(function(){
        //     console.log(self);
        //     self.nextSlide();
        // }, this.timeOutTime * 1000);

        console.log(this.testRoy);
        this.testRoy = 'Sono passato da mounted';


        // this.nextSlide();
        this.startAutoPlay();
    },
});


//mount di app sull'elemento del dom con selettore app
myApp.mount('#app');
