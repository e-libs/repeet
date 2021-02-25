export default {
  translation: {
    home: {
      tapToStart: 'Toque para começar',
    },
    header: {
      exitModal: {
        confirmExit: 'Sair do jogo?',
        yes: 'Sim',
        no: 'Não',
      },
    },
    game: {
      intro: {
        getReady: 'Pronto?',
        go: 'JÁ!',
      },
      gameOver: {
        message: 'Não foi dessa vez...',
        tryAgain: 'Jogar de novo',
        exit: 'Sair',
      },
      status: {
        level: 'nível',
      },
    },
    training: {
      message:
        'Pressione as teclas para conhecer seus sons. Memorize-os, pois você precisará repetir o que ouvir.',
      ready: 'Estou pronto',
    },
    config: {
      title: 'Configurações',
      sound: {
        label: 'Som',
        on: 'Ligado',
        off: 'Desligado',
      },
      blind: {
        label: 'Modo Vendado',
        off: {
          label: 'Desligado',
          description: 'Você verá os botões do computador, e seguirá as sequências pela cor',
        },
        on: {
          label: 'Ligado',
          description: 'Você não verá os botões, terá que jogar com os ouvidos',
        },
        disabledReason: 'Esse modo é desabilitado quando o som está desligado',
      },
      mode: {
        label: 'Modo',
        default: {
          label: 'Padrão',
          description: 'O modo padrão é o clássico, com 4 botões',
        },
        advanced: {
          label: 'Avançado',
          description: 'O modo avançado possui 6 botões. Pode ficar muito mais difícil',
        },
      },
      difficulty: {
        label: 'Dificuldade',
        easy: {
          label: 'Fácil',
          description: 'Você terá 4 chances, e o jogo começa bem devagar',
        },
        medium: {
          label: 'Médio',
          description: 'Você terá 3 chances, e o jogo começa na velocidade normal',
        },
        hard: {
          label: 'Difícil',
          description: 'Você terá 2 chances, e o jogo começa um pouco mais rápido',
        },
      },
      shuffle: {
        label: 'Embaralhar',
        on: {
          label: 'Ligado',
          description:
            'Embaralhando é mais difícl! Os botões serão alterados aleatoriamente a cada rodada',
        },
        off: {
          label: 'Desligado',
          description: 'Sem embaralhar é mais fácil! A sequência exibida será sempre a mesma',
        },
        disabledReason: 'Esse modo é desabilitado quando o modo vendado está ligado',
      },
    },
    footer: {
      description: 'Powered by e-libs',
    },
  },
};
