const validateLineup = (lineup) => {
  if (lineup.length !== 9) { return false }
  if (lineup.filter(playerPosition).length - positionOptions.length !== 2) { return false }// refractor to does not equal 7
  if (lineup.reduce(countOF, 0) !== 3) { return false }
  if (lineup.reduce(teamIDCount, []).filter(num => num > 2).length > 0) { return false }
  if (lineup.reduce(gameIDCount, []).filter(num => num > 3).length > 0) { return false }
  if (lineup.reduce(salaryTotal, 0) > 45000) { return false }

  return true
}

let positionOptions = []

const playerPosition = (player) => {
  if (positionOptions.indexOf(player.position) < 0) {
    positionOptions.push(player.position)
  }

  return positionOptions.length < 8
}

const countOF = (acc, player) => {
  if (player.position === 'OF') { return acc + 1 }

  return acc
}

const teamIDCount = (acc, player) => {
  return acc[player.teamId] ? ++acc[player.teamId] : acc[player.teamId] = 1, acc
}

const gameIDCount = (acc, player) => {
  return acc[player.gameId] ? ++acc[player.gameId] : acc[player.gameId] = 1, acc
}

const salaryTotal = (acc, player) => {
  return acc + player.salary
}

module.exports = validateLineup
