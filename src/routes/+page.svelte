<script>
	import LocationFinder from '$lib/LocationFinder.svelte';
	import Footer from '$lib/Footer.svelte';
	import getHistoricalWeatherData from '$lib/weatherData';
</script>

<div>
	<div class="text-center mb-8">
		<h1 class="text-3xl leading-relaxed">Visualize climate change</h1>
	</div>
	<div>
		<p>
			It is normal for weather conditions to be quite different from year to year - some years are
			hotter, some are colder; some are wetter, some are drier. However, for many places on earth,
			strong trends can be observed. In many cases, the trend is for temperatures to be higher on
			average. The graphics below are designed to give you an idea of how the climate has changed to
			this date for the place where you live.
		</p>
		<br />
	</div>
	<div>
		<Footer />
	</div>
</div>
