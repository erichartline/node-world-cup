const ora = require("ora")
const fetch = require("node-fetch")

module.exports = async args => {
  const spinner = ora().start()
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
  output = `
    ${json[0].home_team.country} ${json[0].home_team.goals} - ${
    json[0].away_team.country
  } ${json[0].away_team.goals}
    ${json[0].time}
       `
  console.log(output)
}
