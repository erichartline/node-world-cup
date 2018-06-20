const ora = require("ora")
const fetch = require("node-fetch")
const chalk = require("chalk")

module.exports = async args => {
  const spinner = ora("Fetching tomorrow's matches").start()

  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    res = await fetch("http://worldcup.sfg.io/matches/tomorrow")
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
    const match = `⚽️   ${item.home_team.country} vs. ${
      item.away_team.country
    }`
    console.log(chalk.cyan(match))
    console.log()
  })
}
