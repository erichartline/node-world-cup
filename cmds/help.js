const menus = {
  main: `
      worldcup [command]
  
      today .............. show today's games
      current .............. show the current game
      version ............ show package version
      help ............... show help menu for a command`

  //   today: `
  //       worldcup today`,
  //   current: `
  //       worldcup current`
}

module.exports = args => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0]

  console.log(menus[subCmd] || menus.main)
}
