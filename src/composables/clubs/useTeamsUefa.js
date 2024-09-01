import { ref } from 'vue';

/* 
* Aqui está a lista dos times classificados para Champions 24/25, que participaram do sorteio
*/
const teams = ref({
  potOne: [
    {
      id: 1,
      name: "Manchester City",
      country: "england",
      opponents: []
    },
    {
      id: 2,
      name: "Bayern de Munique",
      country: "germany",
      opponents: []
    },
    {
      id: 3,
      name: "Real Madrid",
      country: "spain",
      opponents: []
    },
    {
      id: 4,
      name: "PSG",
      country: "france",
      opponents: []
    },
    {
      id: 5,
      name: "Liverpool",
      country: "england",
      opponents: []
    },
    {
      id: 6,
      name: "Inter de Milão",
      country: "italy",
      opponents: []
    },
    {
      id: 7,
      name: "Borussia Dortmund",
      country: "germany",
      opponents: []
    },
    {
      id: 8,
      name: "RB Leipzig",
      country: "germany",
      opponents: []
    },
    {
      id: 9,
      name: "Barcelona",
      country: "spain",
      opponents: []
    }
  ],
  potTwo: [
    {
      id: 10,
      name: "Bayer Leverkusen",
      country: "germany",
      opponents: []
    },
    {
      id: 11,
      name: "Atlético de Madrid",
      country: "spain",
      opponents: []
    },
    {
      id: 12,
      name: "Atalanta",
      country: "italy",
      opponents: []
    },
    {
      id: 13,
      name: "Juventus",
      country: "italy",
      opponents: []
    },
    {
      id: 14,
      name: "Benfica",
      country: "portugal",
      opponents: []
    },
    {
      id: 15,
      name: "Arsenal",
      country: "england",
      opponents: []
    },
    {
      id: 16,
      name: "Club Brugge",
      country: "belgium",
      opponents: []
    },
    {
      id: 17,
      name: "Milan",
      country: "italy",
      opponents: []
    },
    {
      id: 18,
      name: "Shakhtar Donetsk",
      country: "ukraine",
      opponents: []
    }
  ],
  potThree: [
    {
      id: 19,
      name: "Feyenoord",
      country: "netherlands",
      opponents: []
    },
    {
      id: 20,
      name: "Sporting",
      country: "portugal",
      opponents: []
    },
    {
      id: 21,
      name: "PSV",
      country: "netherlands",
      opponents: []
    },
    {
      id: 22,
      name: "Dinamo Zagreb",
      country: "croatia",
      opponents: []
    },
    {
      id: 23,
      name: "RB Salzburg",
      country: "austria",
      opponents: []
    },
    {
      id: 24,
      name: "Lille",
      country: "france",
      opponents: []
    },
    {
      id: 25,
      name: "Estrela Vermelha",
      country: "serbia",
      opponents: []
    },
    {
      id: 26,
      name: "Young Boys",
      country: "switzerland",
      opponents: []
    },
    {
      id: 27,
      name: "Celtic",
      country: "scotland",
      opponents: []
    }
  ],
  potFour: [
    {
      id: 28,
      name: "Slovan Bratislava",
      country: "slovakia",
      opponents: []
    },
    {
      id: 29,
      name: "Monaco",
      country: "france",
      opponents: []
    },
    {
      id: 30,
      name: "Sparta Praga",
      country: "czech republic",
      opponents: []
    },
    {
      id: 31,
      name: "Aston Villa",
      country: "england",
      opponents: []
    },
    {
      id: 32,
      name: "Bologna",
      country: "italy",
      opponents: []
    },
    {
      id: 33,
      name: "Girona",
      country: "spain",
      opponents: []
    },
    {
      id: 34,
      name: "Stuttgart",
      country: "germany",
      opponents: []
    },
    {
      id: 35,
      name: "Sturm Graz",
      country: "austria",
      opponents: []
    },
    {
      id: 36,
      name: "Brest",
      country: "france",
      opponents: []
    }
  ]
});

export default teams;
