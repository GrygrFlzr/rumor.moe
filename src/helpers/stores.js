
import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

const events = [
	{
		title: "September Shop",
		start: "01 September 2020 00:00:00 PDT",
		end: "30 September 2020 23:59:59 PDT",
		image: "/images/card_10174_s.png",
	},
	{
		title: "October Shop",
		start: "01 October 2020 00:00:00 PDT",
		end: "30 October 2020 23:59:59 PDT",
		image: "/images/card_10174_s.png",
	},
	{
		title: "End of Operations",
		start: "30 October 2020 23:59:59 PDT",
		end: null,
		image: "images/kamihama.png",
	},
];

let id = 0;
export const data = writable(
	events.map(event => {
		return {
			id: id++,
			...event
		}
	})
);

export const time = readable(new Date(), function start(set) {
	let interval;
	setTimeout(() => {
		interval = setInterval(() => {
			set(new Date());
		}, 500);
	}, 1000 - new Date().getMilliseconds());

	return function stop() {
		clearInterval(interval);
	}
});