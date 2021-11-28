const validateLineup = (lineup) => {
  if (lineup.length !== 9) { return false }
  if (lineup.map(playerPosition).filter(truthyValue => truthyValue === false).length !== 0) { return false }
  if (lineup.reduce(countOF, 0) !== 3) { return false }
  if (lineup.reduce(teamIDCount, []).filter(count => count > 2).length > 0) { return false }
  if (lineup.reduce(gameIDCount, []).filter(count => count > 3).length > 0) { return false }
  if (lineup.reduce(salaryTotal, 0) > 45000) { return false }

  return true
}

const positionOptions = []

const playerPosition = (player) => {
  if (player.position === 'OF') { return true }
  if (positionOptions.indexOf(player.position) < 0) {
    positionOptions.push(player.position)

    return true
  }

  return false
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

const salaryTotal = (acc, player) => acc + player.salary

module.exports = validateLineup
