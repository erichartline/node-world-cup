const ora = require("ora")
const fetch = require("node-fetch")
const chalk = require("chalk")

module.exports = async args => {
  const spinner = ora("Fetching the current score").start()
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    res = await fetch("http://worldcup.sfg.io/matches/current")
    if (res.ok) {
      json = await res.json()
      spinner.stop()
      printContent(json)
    } else {
      json = await res.json()
      spinner.stop()
      console.log(`title: ${json.errors[0].title}
            detail: ${json.errors[0].detail}`)
    }
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}

const printContent = json => {
  console.log()
  if (json !== Object) {
    console.log("There are no teams playing currently.")
  } else {
    const score = `${json[0].home_team.country} ${json[0].home_team.goals} - ${
      json[0].away_team.country
    } ${json[0].away_team.goals}`
    const time = `${json[0].time}`

    console.log(chalk.cyan(score))
    console.log(`⚽️   ${chalk.green(time)}`)
  }

  console.log()
}
