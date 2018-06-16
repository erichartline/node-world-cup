const ora = require("ora")
const fetch = require("node-fetch")
const chalk = require("chalk")

module.exports = async args => {
  const spinner = ora("Fetching today's scores").start()

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
  console.log()
  const matchList = json.forEach(item => {
    const score = `${item.home_team.country} ${item.home_team.goals} - ${
      item.away_team.country
    } ${item.away_team.goals}`
    const time = `${item.time}`
    console.log(chalk.cyan(score))
    console.log(chalk.gray(time))
    console.log()
  })
}
