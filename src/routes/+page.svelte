<script lang="ts">
	import { Temporal } from 'temporal-polyfill';
	import Clock from '../Clock.svelte';
	import Status from '../Status.svelte';
	import type { PageData } from './$types';
	let selectedDay: 'strike' | 'normal';

	export let data: PageData;

	let now: Temporal.PlainDateTime;
	setInterval(
		() => void (now = Temporal.Now.plainDateTimeISO()),
		1000 | +!!void (now = Temporal.Now.plainDateTimeISO())
	);
	$: today = now?.dayOfWeek;
</script>

<svelte:head>
	<title>Reagan HS Schedule</title>
	<meta name="description" content="displays time until next period" />
</svelte:head>

<div class="prose m-auto max-w-3xl p-6 shadow-2xl">
	<header>
		<h3>Reagan High School Bell Schedule</h3>
	</header>

	<main>
		<h1 class="text-center">
			<pre><Clock {now} /></pre>
		</h1>
		<h3 class="text-center">
			{#if selectedDay === 'strike'}
				<Status {now} calendar={data.strikeSchedule} />
			{:else}
				<Status {now} calendar={data.normalSchedule} />
			{/if}
		</h3>
		<select bind:value={selectedDay}>
			{#if today === 4}
				<option value="strike" selected>STRIKE day</option>
				<option value="normal">Normal day</option>
			{:else}
				<option value="strike">STRIKE day</option>
				<option value="normal" selected>Normal day</option>
			{/if}
		</select>
		<table>
			<thead>
				<th scope="col">Event</th>
				<th scope="col">Time</th>
			</thead>
			<tbody>
				{#if selectedDay === 'strike'}
					{#each data.strikeSchedule as event}
						<tr>
							<td>{event.formal}</td>
							<td>{event.occurs.toLocaleString()}</td>
						</tr>
					{/each}
				{:else}
					{#each data.normalSchedule as event}
						<tr>
							<td>{event.formal}</td>
							<td>{event.occurs.toLocaleString()}</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</main>
	<footer>
		<span>Made with &hearts; by David</span>
		<span>&middot;</span>
		<span><a href="https://github.com/davidjczhao/reagan-schedule/">Star or fork</a> this repo</span>
	</footer>
</div>
