<script>
	import Agile from '../src/Agile'

	export default {
		name: 'Demo',

		components: {
			Agile
		}
	}
</script>

<template>
	<main class="main">
		<section class="section section--demo-1">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<h2 class="section__title">
							<strong>#1 demo</strong>
						</h2>

						<p class="section__description">
							vue-agile with default settings and minimal styles
						</p>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12">
						<Agile>
							<div
								v-for="n in 6"
								:key="n"
								class="slide"
								:class="`slide--${n}`"
							>
								<h3>{{ n }}</h3>
							</div>

							<template #prevButton>
								<i class="fas fa-chevron-left" />
							</template>

							<template #nextButton>
								<i class="fas fa-chevron-right" />
							</template>
						</Agile>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<style lang="scss" type="text/scss">
	@import './scss/main.scss';
</style>
