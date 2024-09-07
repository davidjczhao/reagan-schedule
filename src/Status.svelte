<script lang="ts">
	import { Temporal } from 'temporal-polyfill';

	export let now: Temporal.PlainDateTime,
		calendar: { occurs: Temporal.PlainTime; formal: string; left: string; right: string }[];

	function modulo(left: number, right: number): number {
		return ((left % right) + right) % right;
	}
	// Function to find upperBound, equivalent to std::upper_bound
	function upperBound<T>(arr: T[], value: T, comp: (a: T, b: T) => boolean): number {
		let first = 0;
		let last = arr.length;
		let count = last - first;
		let step: number;
		let it: number;

		while (count > 0) {
			it = first;
			step = Math.floor(count / 2);
			it += step;

			if (!comp(value, arr[it])) {
				first = ++it;
				count -= step + 1;
			} else {
				count = step;
			}
		}

		return first;
	}
	$: upper = upperBound(
		calendar.map((event) => event.occurs),
		now.toPlainTime(),
		(left, right) => Temporal.PlainTime.compare(left, right) === -1
	);
	$: [left, right] = [modulo(upper - 1, calendar.length), modulo(upper, calendar.length)];
	// TODO: assumes next day's schedule is the same as today's
	$: [since, until] = [
		now.toPlainTime().since(calendar[left].occurs),
		left > right
			? now
					.toPlainTime()
					.until(calendar[right].occurs)
					.add(Temporal.Duration.from({ hours: 24 }))
			: now.toPlainTime().until(calendar[right].occurs)
	];
	$: [past, future] = [
		`${since.round('minutes').toLocaleString(undefined, { style: "long", minutesDisplay: "always" })} since ${calendar[left].right}`,
		`${until.round('minutes').toLocaleString(undefined, { style: "long", minutesDisplay: "always" })} until ${calendar[right].left}`
	];
</script>

<span>{past}</span>
<span>&middot;</span>
<span>{future}</span>
