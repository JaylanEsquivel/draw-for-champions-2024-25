import { ref } from "vue";

/*
 * Aqui está a lista dos times classificados para Champions 24/25, que participaram do sorteio
 */
const useTeamsUefa = () => {
  const teams = ref({
    potOne: [
      {
        id: 1,
        name: "Manchester City",
        country: "england",
        logo: "https://logodetimes.com/times/manchester-city-football-club/manchester-city-football-club-256.png",
        opponents: [],
      },
      {
        id: 2,
        name: "Bayern de Munique",
        country: "germany",
        logo: "https://logodetimes.com/times/bayern-munchen/bayern-munchen-256.png",
        opponents: [],
      },
      {
        id: 3,
        name: "Real Madrid",
        country: "spain",
        logo: "https://logodetimes.com/times/real-madrid/logo-real-madrid-escudo-256.png",
        opponents: [],
      },
      {
        id: 4,
        name: "PSG",
        country: "france",
        logo: "https://logodetimes.com/times/paris-saint-germain/paris-saint-germain-256.png",
        opponents: [],
      },
      {
        id: 5,
        name: "Liverpool",
        country: "england",
        logo: "https://logodetimes.com/times/liverpool-football-club/liverpool-football-club-256.png",
        opponents: [],
      },
      {
        id: 6,
        name: "Inter de Milão",
        country: "italy",
        logo: "https://logodetimes.com/times/football-club-internazionale-milano/football-club-internazionale-milano-256.png",
        opponents: [],
      },
      {
        id: 7,
        name: "Borussia Dortmund",
        country: "germany",
        logo: "https://logodetimes.com/times/borussia-dortmund/borussia-dortmund-256.png",
        opponents: [],
      },
      {
        id: 8,
        name: "RB Leipzig",
        country: "germany",
        logo: "https://logodetimes.com/times/rb-leipzig/rb-leipzig-256.png",
        opponents: [],
      },
      {
        id: 9,
        name: "Barcelona",
        country: "spain",
        logo: "https://logodetimes.com/times/barcelona/logo-barcelona-256.png",
        opponents: [],
      },
    ],
    potTwo: [
      {
        id: 10,
        name: "Bayer Leverkusen",
        country: "germany",
        logo: "https://logodetimes.com/times/bayer-04-leverkusen/bayer-04-leverkusen-256.png",
        opponents: [],
      },
      {
        id: 11,
        name: "Atlético de Madrid",
        country: "spain",
        logo: "https://logodetimes.com/times/atletico-madrid/logo-atletico-madrid-256.png",
        opponents: [],
      },
      {
        id: 12,
        name: "Atalanta",
        country: "italy",
        logo: "https://logodetimes.com/times/atalanta-bergamasca-calcio/atalanta-bergamasca-calcio-256.png",
        opponents: [],
      },
      {
        id: 13,
        name: "Juventus",
        country: "italy",
        logo: "https://logodetimes.com/times/juventus-football-club/juventus-football-club-256.png",
        opponents: [],
      },
      {
        id: 14,
        name: "Benfica",
        country: "portugal",
        logo: "https://logodetimes.com/times/benfica/logo-benfica-5.png",
        opponents: [],
      },
      {
        id: 15,
        name: "Arsenal",
        country: "england",
        logo: "https://logodetimes.com/times/arsenal-football-club/arsenal-football-club-256.png",
        opponents: [],
      },
      {
        id: 16,
        name: "Club Brugge",
        country: "belgium",
        logo: "https://logodetimes.com/times/brugge/logo-brugge-5.png",
        opponents: [],
      },
      {
        id: 17,
        name: "Milan",
        country: "italy",
        logo: "https://logodetimes.com/times/associazione-calcio-milan/associazione-calcio-milan-256.png",
        opponents: [],
      },
      {
        id: 18,
        name: "Shakhtar Donetsk",
        country: "ukraine",
        logo: "https://logodetimes.com/times/shakhtar-donetsk/logo-shakhtar-donetsk-5.png",
        opponents: [],
      },
    ],
    potThree: [
      {
        id: 19,
        name: "Feyenoord",
        country: "netherlands",
        logo: "https://www.futbox.com/img/v1/1ee/1de/72f/7f2/b5dae27ed20ff196e715.png",
        opponents: [],
      },
      {
        id: 20,
        name: "Sporting",
        country: "portugal",
        logo: "https://logodetimes.com/times/sporting-portugal/logo-sporting-portugal-5.png",
        opponents: [],
      },
      {
        id: 21,
        name: "PSV",
        country: "netherlands",
        logo: "https://logodetimes.com/times/psv-eindhoven/logo-psv-eindhoven-5.png",
        opponents: [],
      },
      {
        id: 22,
        name: "Dinamo Zagreb",
        country: "croatia",
        logo: "https://www.futbox.com/img/v1/f6f/040/714/78c/fa9a8424366694a46087.png",
        opponents: [],
      },
      {
        id: 23,
        name: "RB Salzburg",
        country: "austria",
        logo: "https://logodetimes.com/times/red-bull-salzburg/logo-fc-salzburg-256.png",
        opponents: [],
      },
      {
        id: 24,
        name: "Lille",
        country: "france",
        logo: "https://logodetimes.com/times/lille-olympique-sporting-club/lille-olympique-sporting-club-256.png",
        opponents: [],
      },
      {
        id: 25,
        name: "Estrela Vermelha",
        country: "serbia",
        logo: "https://logodetimes.com/times/estrela-vermelha/logo-estrela-vermelha-5.png",
        opponents: [],
      },
      {
        id: 26,
        name: "Young Boys",
        country: "switzerland",
        logo: "https://logodetimes.com/times/young-boys/logo-young-boys-2.png",
        opponents: [],
      },
      {
        id: 27,
        name: "Celtic",
        country: "scotland",
        logo: "https://www.futbox.com/img/v1/647/c58/05c/5fe/66b2c79ba41e26ac6ce6.png",
        opponents: [],
      },
    ],
    potFour: [
      {
        id: 28,
        name: "Slovan Bratislava",
        country: "slovakia",
        logo: "https://www.futbox.com/img/v1/57a/369/900/cff/e53a1ad08a8d9fa37259_zoom.png",
        opponents: [],
      },
      {
        id: 29,
        name: "Monaco",
        country: "france",
        logo: "https://logodetimes.com/times/as-monaco/as-monaco-256.png",
        opponents: [],
      },
      {
        id: 30,
        name: "Sparta Praga",
        country: "czech republic",
        logo: "https://www.futbox.com/img/v1/8a4/b82/58d/e84/123ba856c1002f76de1e.png",
        opponents: [],
      },
      {
        id: 31,
        name: "Aston Villa",
        country: "england",
        logo: "https://logodetimes.com/times/aston-villa-football-club/aston-villa-football-club-256.png",
        opponents: [],
      },
      {
        id: 32,
        name: "Bologna",
        country: "italy",
        logo: "https://logodetimes.com/times/bologna-football-club-1909/bologna-football-club-1909-256.png",
        opponents: [],
      },
      {
        id: 33,
        name: "Girona",
        country: "spain",
        logo: "https://logodetimes.com/times/girona/logo-girona-5.png",
        opponents: [],
      },
      {
        id: 34,
        name: "Stuttgart",
        country: "germany",
        logo: "https://logodetimes.com/times/vfb-stuttgart/vfb-stuttgart-256.png",
        opponents: [],
      },
      {
        id: 35,
        name: "Sturm Graz",
        country: "austria",
        logo: "https://www.futbox.com/img/v1/89d/190/812/96e/e3753224448d2db0cb76.png",
        opponents: [],
      },
      {
        id: 36,
        name: "Brest",
        country: "france",
        logo: "https://logodetimes.com/times/stade-brestois-29/stade-brestois-29-256.png",
        opponents: [],
      },
    ],
  });

  const translatePotName = (name) => {
    const namePot = {
        "potOne" : "Pote 1",
        "potTwo" : "Pote 2",
        "potThree" : "Pote 3",
        "potFour" : "Pote 4",
    }

    return namePot[name]
  }

  return {
    teams,
    translatePotName
  };
};

export default useTeamsUefa;
