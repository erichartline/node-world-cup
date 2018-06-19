const menus = {
  main: `
      worldcup [command] <options>
  
      today .............. show today's games
      current ............ show the current game
      country <options>... show scores by country
      group .............. show group standings
      version ............ show package version
      help ............... show help menu for a command
      `,

  country: `
    worldcup country <options>

    --code, -c ........ the country to look up (use FIFA abbreviation i.e. ISL for Iceland)`
}

module.exports = args => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0]

  console.log(menus[subCmd] || menus.main)
}
