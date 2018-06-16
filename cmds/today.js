const ora = require("ora")
const fetch = require("node-fetch")

module.exports = async args => {
  const spinner = ora().start()
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    res = await fetch("http://worldcup.sfg.io/matches/today")
    if (res.ok) {
      json = await res.json()
      spinner.stop()
      printContent(json)
    } else {
      json = await res.json()
      spinner.stop()
      console.log(`title: ${json.errors.title}
            detail: ${json.errors.detail}`)
    }
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}

const printContent = json => {
  const matchList = json.forEach(item => {
    output = `
    ${item.home_team.country} ${item.home_team.goals} - ${
      item.away_team.country
    } ${item.away_team.goals}
    ${item.time}`
    console.log(output)
  })
}
