## node-world-cup

Node.js command line app for World Cup 2018 results and standings.

This uses the [Soccer For Good API](http://worldcup.sfg.io/) to display this year's data.

### Available Commands

1.  **[today](#today)**
2.  **[current](#current)**
3.  **[country](#country)**
4.  **[group](#group)**
5.  **[version](#version)**
6.  **[help](#help)**

### Usage

First, clone this repository and install the app using `npm install`. After installation, use `npm link` to set up a binary for easy access. This allows you to access the app by using `worldcup` as your base.

### today

This command will print out all of the current day's scores.

```
$ worldcup today

France 2 - Australia 1
⚽️   full-time

Argentina 1 - Iceland 1
⚽️   full-time

Peru 0 - Denmark 1
⚽️   full-time

Croatia 2 - Nigeria 0
⚽️   full-time
```

### current

This command will print out the score of any match that is currently being played.

```
$ worldcup current

Peru 0 - Denmark 0
⚽️   half-time
```

### country

This command will print out every score for a specified country. The country must be specified using `-c` or `--country` followed by their FIFA code (i.e. ARG, ISL, etc.).

```
$ worldcup country -c isl

06/16/2018
Argentina 1 - Iceland 1
⚽️   full-time

06/22/2018
Nigeria 0 - Iceland 0
⚽️   Will be played in in 6 days

06/26/2018
Iceland 0 - Croatia 0
⚽️   Will be played in in 10 days
```

### group

This command will print out the current standings for every group.

```
$ worldcup group

⚽️   Group A  ⚽️
┌────────────────────┬────────────────────┬────────────────────┐
│ Team               │ Points             │ Goal Differential  │
├────────────────────┼────────────────────┼────────────────────┤
│ Russia             │ 3                  │ 5                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Uruguay            │ 3                  │ 1                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Egypt              │ 0                  │ -1                 │
├────────────────────┼────────────────────┼────────────────────┤
│ Saudi Arabia       │ 0                  │ -5                 │
└────────────────────┴────────────────────┴────────────────────┘
⚽️   Group B  ⚽️
┌────────────────────┬────────────────────┬────────────────────┐
│ Team               │ Points             │ Goal Differential  │
├────────────────────┼────────────────────┼────────────────────┤
│ Iran               │ 3                  │ 1                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Spain              │ 1                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Portugal           │ 1                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Morocco            │ 0                  │ -1                 │
└────────────────────┴────────────────────┴────────────────────┘
⚽️   Group C  ⚽️
┌────────────────────┬────────────────────┬────────────────────┐
│ Team               │ Points             │ Goal Differential  │
├────────────────────┼────────────────────┼────────────────────┤
│ France             │ 3                  │ 1                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Denmark            │ 3                  │ 1                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Australia          │ 0                  │ -1                 │
├────────────────────┼────────────────────┼────────────────────┤
│ Peru               │ 0                  │ -1                 │
└────────────────────┴────────────────────┴────────────────────┘
⚽️   Group D  ⚽️
┌────────────────────┬────────────────────┬────────────────────┐
│ Team               │ Points             │ Goal Differential  │
├────────────────────┼────────────────────┼────────────────────┤
│ Croatia            │ 3                  │ 2                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Iceland            │ 1                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Argentina          │ 1                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Nigeria            │ 0                  │ -2                 │
└────────────────────┴────────────────────┴────────────────────┘
⚽️   Group E  ⚽️
┌────────────────────┬────────────────────┬────────────────────┐
│ Team               │ Points             │ Goal Differential  │
├────────────────────┼────────────────────┼────────────────────┤
│ Serbia             │ 0                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Costa Rica         │ 0                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Switzerland        │ 0                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Brazil             │ 0                  │ 0                  │
└────────────────────┴────────────────────┴────────────────────┘
⚽️   Group F  ⚽️
┌────────────────────┬────────────────────┬────────────────────┐
│ Team               │ Points             │ Goal Differential  │
├────────────────────┼────────────────────┼────────────────────┤
│ Korea Republic     │ 0                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Sweden             │ 0                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Mexico             │ 0                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Germany            │ 0                  │ 0                  │
└────────────────────┴────────────────────┴────────────────────┘
⚽️   Group G  ⚽️
┌────────────────────┬────────────────────┬────────────────────┐
│ Team               │ Points             │ Goal Differential  │
├────────────────────┼────────────────────┼────────────────────┤
│ Belgium            │ 0                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ England            │ 0                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Tunisia            │ 0                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Panama             │ 0                  │ 0                  │
└────────────────────┴────────────────────┴────────────────────┘
⚽️   Group H  ⚽️
┌────────────────────┬────────────────────┬────────────────────┐
│ Team               │ Points             │ Goal Differential  │
├────────────────────┼────────────────────┼────────────────────┤
│ Senegal            │ 0                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Colombia           │ 0                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Japan              │ 0                  │ 0                  │
├────────────────────┼────────────────────┼────────────────────┤
│ Poland             │ 0                  │ 0                  │
└────────────────────┴────────────────────┴────────────────────┘
```

### version

Simply provides the current version of the app.

```
$ worldcup version

v1.0.0
```

### help

Basic help with a list of all commands.

```
$ worldcup help

      worldcup [command] <options>

      today .............. show today's games
      current ............ show the current game
      country ............ show scores by country
      group .............. show group standings
      version ............ show package version
      help ............... show help menu for a command
```
