const validateLineup = (lineup) => {
  if (lineup.length !== 9) { return false }
  if (lineup.filter(playerPosition).length - positionOptions.length !== 2) { return false }// refractor to does not equal 7
  if (lineup.reduce(countOF, 0) !== 3) { return false }
  if (lineup.reduce((acc, curr) => {
    return acc[curr.teamId] ? ++acc[curr.teamId] : acc[curr.teamId] = 1, acc
  }, []).filter(num => num > 2).length > 0) { return false }

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

module.exports = validateLineup
