<script lang="ts">
	import { spring } from 'svelte/motion';
	import type { Temporal } from 'temporal-polyfill';

	export let now: Temporal.PlainDateTime;
</script>

<!--TODO: Animate-->
<span>{now.toPlainTime().toLocaleString()}</span>
