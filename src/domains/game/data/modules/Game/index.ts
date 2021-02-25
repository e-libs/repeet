import type { Level } from 'domains/game/data/modules/Game/types';

type LevelType = Record<number, Level>;

export const Levels: LevelType = {
  500: { name: 'Newbie', number: 1 },
  1000: { name: 'Novice', number: 2 },
  1500: { name: 'Rookie', number: 3 },
  2000: { name: 'Beginner', number: 4 },
  2500: { name: 'Talented', number: 5 },
  3000: { name: 'Skilled', number: 6 },
  5000: { name: 'Intermediate', number: 7 },
  6000: { name: 'Skillful', number: 8 },
  7500: { name: 'Seasoned', number: 9 },
  8500: { name: 'Proficient', number: 10 },
  10000: { name: 'Experienced', number: 11 },
  15000: { name: 'Advanced', number: 12 },
  50000: { name: 'Senior', number: 13 },
  100000: { name: 'Expert', number: 14 },
  500000: { name: 'Master', number: 15 },
};

/*
LEVEL   	      EASY		           MEDIUM		             HARD	
		             -60		              -35		              -25
1	        1000   940	        600	    565	        400	    375
2	        940	   880	        565	    530	        375	    350
3	        880	   820	        530	    495	        350	    325
4	        820	   760	        495	    460	        325	    300
5	        760	   700	        460	    425	        300	    275
6	        700	   640	        425	    390	        275	    250
7	        640	   580	        390	    355	        250	    225
8	        580	   520	        355	    320	        225	    200
9	        520	   460	        320	    285	        200	    175
10	      460	   400	        285	    250	        175	    150
11	      400	   340	        250	    215	        150	    125
12	      340	   280	        215	    180	        125	    100
13	      280	   220	        180	    145	        100	    75
14	      220	   160	        145	    110	        75	    50
15	      160	   100	        110	    75	        50	    25

*/
