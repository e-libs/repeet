export default {
  translation: {
    home: {
      tapToStart: 'Tap to start',
    },
    header: {
      exitModal: {
        confirmExit: 'Exit game?',
        yes: 'Yes',
        no: 'No',
      },
    },
    game: {
      intro: {
        getReady: 'Get ready!',
        go: 'GO!',
      },
      gameOver: {
        message: 'Better luck next time...',
        tryAgain: 'Play again',
        exit: 'Exit',
      },
    },
    training: {
      message:
        'Tap the keys to get to know their sounds. Memorize them, as you will need to repeat what you hear.',
      ready: 'I am ready',
    },
    config: {
      title: 'Configurations',
      sound: {
        label: 'Sound',
        on: 'On',
        off: 'Off',
      },
      blind: {
        label: 'Blindfolded',
        off: {
          label: 'Off',
          description: 'You will see the computer buttons, and follow the sequence by their color',
        },
        on: {
          label: 'On',
          description: 'You will not see the buttons, you must play by ear',
        },
        disabledReason: 'This mode is disabled when the sound is off',
      },
      mode: {
        label: 'Mode',
        default: {
          label: 'Default',
          description: 'The default mode is the classic one, with 4 buttons',
        },
        advanced: {
          label: 'Advanced',
          description: 'The advanced has 6 buttons. It can get way harder',
        },
      },
      difficulty: {
        label: 'Difficulty',
        easy: {
          label: 'Easy',
          description: 'You will have 4 attempts, and it will start really slow',
        },
        medium: {
          label: 'Medium',
          description: 'You will have 3 attempts, and it will start in normal speed',
        },
        hard: {
          label: 'Hard',
          description: 'You will have 2 attempts, and it will start a little faster',
        },
      },
      shuffle: {
        label: 'Shuffle',
        on: {
          label: 'On',
          description:
            'Shuffling is hard! It will randomize the displayed sequence order every round',
        },
        off: {
          label: 'Off',
          description: 'Not shuffling is easy! The displayed sequences are always the same',
        },
        disabledReason: 'This mode is disabled when blindfolded mode is on',
      },
    },
    footer: {
      description: 'Powered by e-libs',
    },
  },
};
