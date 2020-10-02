/**************************************
    VUE INSTANCE
 **************************************/
new Vue({
  el: '#app',
  data() {
    return {
      appTitle: 'Serviços Dinâmica Vidros',
      products: [
        { id: 1, title: 'Prateleiras em vidro lapidado' },
        { id: 2, title: 'Tampos de mesa' },
        { id: 3, title: 'Vidros jateados' },
        { id: 4, title: 'Corrimão / guarda-corpo em vidro' },
        { id: 5, title: 'Box para banheiro' },
        { id: 6, title: 'Vidros laminados (acústicos) com várias cores e composições' },
        { id: 7, title: 'Vidro temperado' },
        { id: 8, title: 'Espelhos' },
        { id: 9, title: 'Sensores, camaras, stand alone (DVR)' },
        { id: 10, title: 'Esquadrias de alumínio' },
        { id: 11, title: 'ACM' },
        { id: 12, title: 'Kit sacada' },
        { id: 13, title: 'Videos' },
        { id: 14, title: 'Barras Antipânico' },
        { id: 15, title: 'Mais Videos' },
        { id: 16, title: 'Lousa em Vidro' },
        { id: 17, title: 'Portas e Janelas de Correr em Aluminio' },
        { id: 18, title: 'Portas e Janelas Venezianas' },
        { id: 19, title: 'Balcão de vidro' },
        { id: 20, title: 'Divisórias em vidro' },
        { id: 21, title: 'Fachadas em vidro' },
        { id: 22, title: 'Automatizados de portas sociais (automáticas)' }
      ],
      cart: [],
      total: 0
    };
  },
  methods: {
    
  },
});