import { ref } from "vue";

const useTeamDraw = () => {

  const selectedTeam = ref(0);

  const selectedTeams = ref([]);

  const clubRaffle = (teams) => {

    // console.log(teams.potOne);
    if(selectedTeam.value === 0) {

      const randomElement = handleSelected(teams);

      // const randomElement = teams.potOne[randomIndex];
      console.log(randomElement);

      // teams.potOne.forEach(element => {
      //   element.name = element.name + "JAY"
      //   console.log(element.name);
  
      // });

    }
  }

  const handleSelected = (teams) => {
    let selectOK = false;
    let indexRandom = 0;

    const position = indexSelected(teams);

    while (selectOK === false) {
      indexRandom = Math.floor(Math.random() * position.length)

      if(!selectedTeams.value.includes(indexRandom)){
        selectedTeams.value.push(indexRandom);
        selectOK = true;
      }
    }

    return position[indexRandom];
  }

  const indexSelected = (teams) => {
    const countSelected = selectedTeams.value.length;

    console.log(countSelected);

    if(countSelected < 9){
      return teams.potOne;
    }

    if(countSelected >= 9 && countSelected <= 18){
      return teams.potTwo;
    }

    if(countSelected >= 18 && countSelected <= 27){
      return teams.potThree;
    }

    if(countSelected >= 27 && countSelected <= 36){
      return teams.potFour;
    }
  }

  return {
    clubRaffle
  };
};

export default useTeamDraw;
