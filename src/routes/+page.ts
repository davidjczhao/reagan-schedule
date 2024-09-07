import { Temporal } from 'temporal-polyfill';
import type { PageLoad } from './$types';
export const load: PageLoad = () => ({
	strikeSchedule: [
		{
			occurs: new Temporal.PlainTime(8, 50),
			formal: 'Period 1',
			left: 'school',
			right: 'first period started'
		},
		{
			occurs: new Temporal.PlainTime(9, 40),
			formal: 'Period 1 - Period 2',
			left: 'first period ends',
			right: 'first period ended'
		},
		{
			occurs: new Temporal.PlainTime(9, 45),
			formal: 'Period 2',
			left: 'second period',
			right: 'second period started'
		},
		{
			occurs: new Temporal.PlainTime(10, 30),
			formal: 'Period 2 - STRIKE Time',
			left: 'second period ends',
			right: 'second period ended'
		},
		{
			occurs: new Temporal.PlainTime(10, 35),
			formal: 'STRIKE Time',
			left: 'STRIKE time',
			right: 'STRIKE time started'
		},
		{
			occurs: new Temporal.PlainTime(11, 15),
			formal: 'STRIKE Time - Period 3',
			left: 'STRIKE time ends',
			right: 'STRIKE time ended'
		},
		{
			occurs: new Temporal.PlainTime(11, 20),
			formal: 'Period 3',
			left: 'third period',
			right: 'third period started'
		},
		{
			occurs: new Temporal.PlainTime(12, 5),
			formal: 'Period 3 - Period 4',
			left: 'third period ends',
			right: 'third period ended'
		},
		{
			occurs: new Temporal.PlainTime(12, 10),
			formal: 'Period 4',
			left: 'fourth period',
			right: 'fourth period started'
		},
		{
			occurs: new Temporal.PlainTime(12, 55),
			formal: 'Period 4 - Period 5',
			left: 'fourth period ends',
			right: 'fourth period ended'
		},
		{
			occurs: new Temporal.PlainTime(13, 0),
			formal: 'Period 5',
			left: 'fifth period',
			right: 'fifth period started'
		},
		{
			occurs: new Temporal.PlainTime(13, 45),
			formal: 'Period 5 - Period 6',
			left: 'fifth period ends',
			right: 'fifth period ended'
		},
		{
			occurs: new Temporal.PlainTime(13, 50),
			formal: 'Period 6',
			left: 'sixth period',
			right: 'sixth period started'
		},
		{
			occurs: new Temporal.PlainTime(14, 35),
			formal: 'Period 6 - Period 7',
			left: 'sixth period ends',
			right: 'sixth period ended'
		},
		{
			occurs: new Temporal.PlainTime(14, 40),
			formal: 'Period 7',
			left: 'seventh period',
			right: 'seventh period started'
		},
		{
			occurs: new Temporal.PlainTime(15, 25),
			formal: 'Period 7 - Period 8',
			left: 'seventh period ends',
			right: 'seventh period ended'
		},
		{
			occurs: new Temporal.PlainTime(15, 30),
			formal: 'Period 8',
			left: 'eighth period',
			right: 'eigth period started'
		},
		{
			occurs: new Temporal.PlainTime(16, 15),
			formal: 'Dismissal',
			left: "school's out",
			right: 'school got out'
		}
	],
	normalSchedule: [
		{
			occurs: new Temporal.PlainTime(8, 50),
			formal: 'Period 1',
			left: 'school',
			right: 'first period started'
		},
		{
			occurs: new Temporal.PlainTime(9, 45),
			formal: 'Period 1 - Period 2',
			left: 'first period ends',
			right: 'first period ended'
		},
		{
			occurs: new Temporal.PlainTime(9, 50),
			formal: 'Period 2',
			left: 'second period',
			right: 'second period started'
		},
		{
			occurs: new Temporal.PlainTime(10, 45),
			formal: 'Period 2 - Period 3',
			left: 'second period ends',
			right: 'second period ended'
		},
		{
			occurs: new Temporal.PlainTime(10, 50),
			formal: 'Period 3',
			left: 'third period',
			right: 'third period started'
		},
		{
			occurs: new Temporal.PlainTime(11, 40),
			formal: 'Period 3 - Period 4',
			left: 'third period ends',
			right: 'third period ended'
		},
		{
			occurs: new Temporal.PlainTime(11, 45),
			formal: 'Period 4',
			left: 'fourth period',
			right: 'fourth period started'
		},
		{
			occurs: new Temporal.PlainTime(12, 35),
			formal: 'Period 4 - Period 5',
			left: 'fourth period ends',
			right: 'fourth period ended'
		},
		{
			occurs: new Temporal.PlainTime(12, 40),
			formal: 'Period 5',
			left: 'fifth period',
			right: 'fifth period started'
		},
		{
			occurs: new Temporal.PlainTime(13, 30),
			formal: 'Period 5 - Period 6',
			left: 'fifth period ends',
			right: 'fifth period ended'
		},
		{
			occurs: new Temporal.PlainTime(13, 35),
			formal: 'Period 6',
			left: 'sixth period',
			right: 'sixth period started'
		},
		{
			occurs: new Temporal.PlainTime(14, 25),
			formal: 'Period 6 - Period 7',
			left: 'sixth period ends',
			right: 'sixth period ended'
		},
		{
			occurs: new Temporal.PlainTime(14, 30),
			formal: 'Period 7',
			left: 'seventh period',
			right: 'seventh period started'
		},
		{
			occurs: new Temporal.PlainTime(15, 20),
			formal: 'Period 7 - Period 8',
			left: 'seventh period ends',
			right: 'seventh period ended'
		},
		{
			occurs: new Temporal.PlainTime(15, 25),
			formal: 'Period 8',
			left: 'eighth period',
			right: 'eigth period started'
		},
		{
			occurs: new Temporal.PlainTime(16, 15),
			formal: 'Dismissal',
			left: "school's out",
			right: 'school got out'
		}
	]
});
