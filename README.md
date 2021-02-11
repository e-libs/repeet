![](src/assets/images/logo-docs.jpeg)

# repeet

> A game experiment with React Native


## Introduction

This project is an attempt to create a simple but thorough gaming experience.

Memory games can be really simple, from the player's perspective, but I've found it to be somewhat challenging after the first steps.

I hope you'll enjoy playing around with it, maybe one day downloading the app (soon).

## The Idea

The idea is simple: I created one of those memory games where the computer tells you a sequence, and you have to repeat it in order to move to the next level. As you need to repeat it, hence the name: _**Repeet**_.

## The Tech

I'm basically using React Native with Expo, Typescript, Redux, Styled Components.

## The Game

Here's the basic game timeline:

- The player starts the game
- The computer randomize a sequence of keys, twinkling them so the player can see it
- The player now must hit the same sequence on the key pad, at the bottom
- At each step, if the player gets the right key, the game expects the next one, so on and so forth
- If the player hits the wrong key or takes too long and the time expires, the round will restart
- The player may have 2 attempts (hard mode), 3 attempts (medium mode), or 5 attempts (easy mode)
- By missing multiple times, if the player runs out of attempts, it's game over
- As the player progresses, he/she will increase the score at each round
- As the score gets higher, so does the speed, which will accelerate the whole game

At this moment, the game has two main views: the game itself (described above) and the configuration panel. On the configuration panel, the player may set three different configurations:

- Difficulty: easy, medium, hard
- Mode: default, advanced
- Shuffle: on, off

Each of those configuration will determine how the game will roll.

## Difficulty

### Easy

The game will start very slow, and the user will start with 5 attempts in total.

### Medium

The game will start with regular speed, and the user will start with 3 attempts in total.

### Hard

The game will start in a slightly higher speed, and the user will start with only 2 attempts in total.


## Mode

### Default

It's the default 4 keys board, and the computer will randomize a 4 keys sequence.

### Advanced

It has 6 keys instead of 4, and the randomized sequence will contain 6 keys.


## Shuffle

### On

If the player wants to make the game even harder, it's possible to turn the shuffle mode on. With that, at each round, the computer keys order will be randomized to something different than the bottom key pad (the player's one). Therefore, the player will have to memorize the actual colors, and not their position.

### Off

When the shuffle mode is off, the top keys (the computer ones) will always remain in the same position.

## Other Features

### Countdown

There is a countdown indicator informing the player how many "time units" remain. This was an important decision as working with actual time (3 seconds, 2 seconds, etc) could get misleading as the game speed increases, as the user progresses.

Like many other points of the game, it also responds to what the player has set on the configuration panel. If it's the _default mode_, there will be 4 time units. If it's the _advanced mode_, there will be 6. To summarize, they are directly connected to the number of keys beind displayed.

### Attempts Left

This indicator will tell the player how many attempts left are still available, and show when they're being lost (when the user loses a round).

### Progress Bard

In order to give the player a progress feedback, as the right keys are being tapped, the progress bar shows how the player's got right, at a given moment.

### Intro

Instead of going straight to the game after the user taps the initial button to start the game, a middle screen is shown, the Intro, so the player can get ready to start. It will countdown from 3 to 0, then the game will start.

### Modals

The user may exit the game in two situations: by clicking on the back button at the top left and choosing the "yes" option on the _Exit Modal_, or by declining to play another match on the _Game Over_ modal. If the player selects not to exit, or play again, the game will be displayed again.

### Multi Language

The game supports _English_ and _Portuguese_ at the moment. It uses the device's language, therefore there's no configuration _in-app_ to change it. To implement that I used [i18next](https://www.npmjs.com/package/i18next) and [react-i18next](https://www.npmjs.com/package/react-i18next)

## Other Tech Features

### PubSub

The main logic of how things should respond to events is controlled by the `Conductor` object, which is a singleton of the `EventManager` class. It uses an internal _PubSub_ structure I created. Every component that needs to respond to an event will register itself with the `Conductor.on()` method. The Conductor will emit events according to the logical sequence as the game goes, and those components will react to those events. When a component is unmounted, it unregisters itself from the Conductor.

### React Hooks

At the component/React level, the main logic is orchestrated by the `useGame` hook, along with other hooks that manage the Redux Store and Components states.

### Redux / redux-persist

The main state of the game is kept inside the Redux Store, and each domain has its own. Some of them will be persisted, even when the game is closed (such as the configuration ones). This way, when the player comes back, the previous configuration will still be there, persisted.

In order to manipulate the state, I'm dispatching action, with _action creators_, and selecting the state pieces with [reselect](https://www.npmjs.com/package/reselect)'s `createSelector`.

### Styled Components

[Styled Components](https://styled-components.com/) are being used in order to keep the code clean, reusable, neat.

### Typescript

It would be way harder to get this working without type checking. Thanks, TS!

### Test

I'm using [Jest](https://jestjs.io/) for my unit tests. Pretty straightforward.

### Linting

Basically I'm relying on airbnb, prettier and typescript to get my code linted.
