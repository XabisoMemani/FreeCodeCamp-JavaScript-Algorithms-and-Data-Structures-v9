// poll - Map where each option maps to a Set of voterIds
const poll = new Map();

function addOption(option) {
  // empty check
  if (!option || option.trim() === "")
    return `Option cannot be empty.`;

  // already exists check
  if (poll.has(option))
    return `Option "${option}" already exists.`;

  // add new option with empty Set to track voters
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
  // option must exist
  if (!poll.has(option))
    return `Option "${option}" does not exist.`;

  const voters = poll.get(option);

  // no duplicate votes
  if (voters.has(voterId))
    return `Voter ${voterId} has already voted for "${option}".`;

  // add voter and confirm
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
  let results = "Poll Results:\n";

  poll.forEach((voters, option) => {
    results += `${option}: ${voters.size} votes\n`;
  });

  return results.trim();
}

// add at least 3 options
addOption("Turkey");
addOption("Morocco");
addOption("Spain");
addOption("Malaysia");
addOption("Algeria");

// at least 3 votes
vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");
vote("Algeria", "traveler1");
vote("Malaysia", "traveler2");

console.log(displayResults());
