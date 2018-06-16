const ora = require("ora")
const fetch = require("node-fetch")
const chalk = require("chalk")
const Table = require("cli-table")

module.exports = async args => {
  const spinner = ora("Fetching the group results").start()
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    res = await fetch("http://worldcup.sfg.io/teams/group_results")
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

  const groupLetters = json.forEach(item => {
    console.log(`⚽️   Group ${item.group.letter}  ⚽️`)

    const group = item.group.teams.map(g => [
      g.team.country,
      g.team.points,
      g.team.goal_differential
    ])

    const table = new Table({
      head: ["Team", "Points", "Goal Differential"],
      colWidths: [20, 20, 20]
    })

    table.push(...group)
    console.log(table.toString())
  })
}
