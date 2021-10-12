const settings = [{
    name: 'Texas Blues',
    slug: 'texas-blues',
    postedby: 'Ramon',
    controls: {
      reverb: 4,
      master: 2,
      middle: 5,
      bass: 10,
      treble: 11,
      fat: 'in',
      volume: 3
    }
  },
  {
    name: 'Blues 2',
    slug: 'blues-2',
    postedby: 'Doug',
    controls: {
      reverb: 4,
      master: 5,
      middle: 5,
      bass: 7,
      treble: 6,
      fat: 'in',
      volume: 3
    }
  },
  {
    name: 'Roadhouse Clean',
    slug: 'roadhouse-clean',
    postedby: 'Jesper Hansen',
    controls: {
      reverb: 4,
      master: 7,
      middle: 5,
      bass: 7,
      treble: 10,
      fat: 'out',
      volume: 3
    }
  },
  {
    name: 'American Standard Strat',
    slug: 'american-standard-strat',
    postedby: 'Nick Robb',
    controls: {
      reverb: 3.5,
      master: 12,
      middle: 1,
      bass: 6,
      treble: 10,
      fat: 'out',
      volume: 3
    }
  },
  {
    name: 'Vintage Rock Clean',
    slug: 'vintage-rock-clean',
    postedby: 'Ramon',
    controls: {
      reverb: 3,
      master: 12,
      middle: 4.5,
      bass: 8,
      treble: 12,
      fat: 'out',
      volume: 3
    }
  },
  {
    name: 'Squeaky Clean',
    slug: 'squeaky-clean',
    postedby: 'Ramon',
    controls: {
      reverb: 10,
      master: 4,
      middle: 1,
      bass: 10,
      treble: 12,
      fat: 'out',
      volume: 4
    }
  },
  {
    name: 'Robben Ford Elite',
    slug: 'robben-ford-elite',
    postedby: 'Fred Holzhauzer',
    controls: {
      reverb: 6,
      master: 6,
      middle: 10,
      bass: 6,
      treble: 8,
      fat: 'in',
      volume: 4
    },
    notes: [{
        pickups: ['neck'],
        guitar_controls: {
          tone: 6,
          volume: 6
        }
      },
      {
        pickups: ['bridge'],
        guitar_controls: {
          tone: 10,
          volume: 8
        }
      }
    ]
  },
  {
    name: 'Minor Blues',
    slug: 'minor-blues',
    postedby: 'Ramon',
    controls: {
      reverb: 3,
      master: 12,
      middle: 6,
      bass: 5,
      treble: 9,
      fat: 'in',
      volume: 4
    }
  },
  {
    name: 'The Byrds',
    slug: 'the-byrds',
    postedby: 'Ramon',
    controls: {
      reverb: 6,
      master: 12,
      middle: 9,
      bass: 4,
      treble: 11,
      fat: 'out',
      volume: 4
    },
    notes: [{
      pickups: ['middle', 'neck'],
      guitar_controls: {
        tone: 10
      }
    }]
  },
  {
    name: 'SRV (Pride and Joy)',
    slug: 'srv-pride-and-joy',
    postedby: 'Ramon',
    controls: {
      reverb: 1.5,
      master: 5,
      middle: 7,
      bass: 4,
      treble: 11,
      fat: 'in',
      volume: 4.5
    }
  },
  {
    name: 'Turn, turn, turn',
    slug: 'turn-turn-turn',
    postedby: 'Ramon',
    controls: {
      reverb: 9,
      master: 12,
      middle: 4,
      bass: 3,
      treble: 12,
      fat: 'out',
      volume: 4.5
    },
    notes: [{
      pickups: ['middle', 'neck'],
      guitar_controls: {
        tone: 10
      }
    }]
  },
  {
    name: 'Deep & Clean',
    slug: 'deep-and-clean',
    postedby: 'Fred Holzhauer',
    controls: {
      reverb: 10,
      master: 2,
      middle: 4,
      bass: 7,
      treble: 10,
      fat: 'out',
      volume: 5
    },
    notes: [{
        pickups: ['middle', 'neck'],
        guitar_controls: {
          tone: 10,
          volume: 8
        }
      },
      {
        pickups: ['neck'],
        guitar_controls: {
          tone: 10,
          volume: 8
        }
      }
    ]
  },
  {
    name: 'Vintage Growl',
    slug: 'vintage-growl',
    postedby: 'Nick Robb',
    controls: {
      reverb: 3,
      master: 3,
      middle: 6,
      bass: 4,
      treble: 7,
      fat: 'in',
      volume: 5
    }
  },
  {
    name: 'Fender Flavor',
    slug: 'fender-flavor',
    postedby: 'Ramon',
    controls: {
      reverb: 10,
      master: 3,
      middle: 4,
      bass: 8,
      treble: 11,
      fat: 'out',
      volume: 5
    }
  },
  {
    name: 'Minor Blues 2',
    slug: 'minor-blues-2',
    postedby: 'Ramon',
    controls: {
      reverb: 2,
      master: 12,
      middle: 1,
      bass: 3,
      treble: 8,
      fat: 'in',
      volume: 5.5
    }
  },
  {
    name: 'Blues American Strat',
    slug: 'blues-american-strat',
    postedby: 'Nick Robb',
    controls: {
      reverb: 4,
      master: 5,
      middle: 1,
      bass: 6,
      treble: 10,
      fat: 'in',
      volume: 6
    }
  },
  {
    name: 'Slow Down & Dirty',
    slug: 'slow-down-and-dirty',
    postedby: 'Nick Robb',
    controls: {
      reverb: 4,
      master: 8,
      middle: 7,
      bass: 6,
      treble: 8,
      fat: 'out',
      volume: 6
    }
  },
  {
    name: 'Wonderful Tonight',
    slug: 'wonderful-tonight',
    postedby: 'Ramon',
    controls: {
      reverb: 7,
      master: 3,
      middle: 12,
      bass: 11,
      treble: 7,
      fat: 'in',
      volume: 7
    },
    notes: [{
      pickups: ['bridge'],
      guitar_controls: {
        tone: 10
      }
    }]
  },
  {
    name: 'Strat Heart of Gold',
    postedby: 'Ramon',
    controls: {
      reverb: 9,
      master: 3,
      middle: 2,
      bass: 4,
      treble: 11,
      fat: 'in',
      volume: 7
    }
  },
  {
    name: 'Sweet Solo',
    postedby: 'Nick Robb',
    controls: {
      reverb: 5,
      master: 6,
      middle: 5,
      bass: 5,
      treble: 4,
      fat: 'in',
      volume: 7
    }
  },
  {
    name: 'Smooth and Mellow',
    postedby: 'Ramon',
    controls: {
      reverb: 8,
      master: 2.5,
      middle: 3.5,
      bass: 10,
      treble: 1,
      fat: 'in',
      volume: 7.5
    }
  },
  {
    name: 'Late Night Blues',
    postedby: 'Ramon',
    controls: {
      reverb: 4,
      master: 2,
      middle: 10,
      bass: 1,
      treble: 12,
      fat: 'in',
      volume: 8
    }
  },
  {
    name: 'Blues 1',
    postedby: 'Doug',
    controls: {
      reverb: 4,
      master: 3,
      middle: 10,
      bass: 4,
      treble: 10,
      fat: 'in',
      volume: 8
    },
    notes: [{
      pickups: ['neck'],
      guitar_controls: {
        tone: 6.5
      }
    }]
  },
  {
    name: 'SRV',
    postedby: 'Doug',
    controls: {
      reverb: 3,
      master: 3,
      middle: 10,
      bass: 4,
      treble: 10,
      fat: 'in',
      volume: 8
    }
  },
  {
    name: 'Favorite Blues',
    postedby: 'Ramon',
    controls: {
      reverb: 10,
      master: 2,
      middle: 9,
      bass: 1,
      treble: 12,
      fat: 'in',
      volume: 9
    }
  },
  {
    name: 'Hard Edge Blues',
    postedby: 'Ramon',
    controls: {
      reverb: 10,
      master: 2,
      middle: 9,
      bass: 6,
      treble: 12,
      fat: 'in',
      volume: 10
    }
  },
  {
    name: 'Layla',
    postedby: 'Ramon',
    controls: {
      reverb: 6.5,
      master: 2,
      middle: 2,
      bass: 1,
      treble: 12,
      fat: 'in',
      volume: 10
    },
    notes: [{
      pickups: ['bridge'],
      guitar_controls: {
        tone: 10
      }
    }]
  },
  {
    name: 'SRV (Voodoo Child)',
    postedby: 'Ramon',
    controls: {
      reverb: 10,
      master: 4,
      middle: 12,
      bass: 10.5,
      treble: 8.5,
      fat: 'in',
      volume: 10
    }
  },
  {
    name: 'Blues Power',
    postedby: 'Nick Robb',
    controls: {
      reverb: 4,
      master: 10,
      middle: 10,
      bass: 8,
      treble: 12,
      fat: 'in',
      volume: 10
    }
  },
  {
    name: 'SRV w/TS9 Mod to 808',
    postedby: 'Blake Simmons',
    controls: {
      reverb: 4,
      master: 7,
      middle: 4,
      bass: 5,
      treble: 6,
      fat: 'in',
      volume: 11
    }
  },
  {
    name: 'SRV Sound',
    postedby: 'Jesper Hansen',
    controls: {
      reverb: 4,
      master: 3,
      middle: 2,
      bass: 7,
      treble: 7,
      fat: 'in',
      volume: 12
    }
  }
];

export default settings;
