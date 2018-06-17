const ora = require("ora")
const fetch = require("node-fetch")
const chalk = require("chalk")
const moment = require("moment")

module.exports = async args => {
  if (!args.country || !args.c) {
    console.log(`You need to enter a FIFA country code to use this command. Try something like:
      worldcup country -c isl`)
  } else {
    let fetchedCountry = args.country || args.c
    let country = fetchedCountry.toUpperCase()
    const spinner = ora(`Fetching ${country}'s scores`).start()

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      res = await fetch(
        `http://worldcup.sfg.io/matches/country?fifa_code=${country}`
      )
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
}

const printContent = json => {
  console.log()
  const matchList = json.forEach(item => {
    const score = `${item.home_team.country} ${item.home_team.goals} - ${
      item.away_team.country
    } ${item.away_team.goals}`

    const time = `${item.time}`
    const matchDate = moment(item.datetime).format("MM/DD/YYYY")
    const futureDate = moment(item.datetime).fromNow()
    console.log(chalk.red(matchDate))
    console.log(chalk.cyan(score))
    if (time !== "null") {
      console.log(`⚽️   ${chalk.green(time)}`)
    } else {
      console.log(`⚽️   ${chalk.gray(`Will be played in ${futureDate}`)}`)
    }
    console.log()
  })
}
