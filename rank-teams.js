
let votes = ["BCA","CAB","CBA","ABC","ACB","BAC"];

var rankTeams = function(votes) {        
    let ec = {}
    let noOfTeams = votes[0].length;
    
    for (let i = 0; i< votes.length; i++) {
        const vote = votes[i];
      
      for(let j=0; j < vote.length; j++) {
        let team = vote[j];
        const order = j;
        if (ec[team] === undefined) {
          ec[team] = new Array(noOfTeams).fill(0);                       
        } 
        ec[team][order]++;
      }                
    }
  
      console.log(ec);
      
     let sortedTeams = Object.keys(ec).sort((a,b) => {
      const firstTeamVotes = ec[a];
      const secondTeamVotes = ec[b];
      let pos = 0;
      
      function check(position) {
          if (firstTeamVotes[position] > secondTeamVotes[position]) {
            return -1;
          } else if (firstTeamVotes[position] < secondTeamVotes[position]) {
            return 1;
          } else {
            if (position < noOfTeams) {
               return check(position + 1);
            } else {              
              const aTeamValue = a.charCodeAt(0);
              const bTeamValue = b.charCodeAt(0);
              console.log(`aTeamValue: ${aTeamValue}, bTeamValue: ${bTeamValue}`);
              return (aTeamValue - bTeamValue);
            }
          }
      }                       
      return check(pos);      
    });
  
  console.log(sortedTeams);
};
