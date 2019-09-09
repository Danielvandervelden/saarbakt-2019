<?php
$bakingbags = new WP_Query(array(
	'post_type' => 'bakingbags',
	'posts_per_page' => '-1'
))
?>

<section class="sb-bakingbags">
	<h2 class="sb-page-title">Baking Bags</h2>
	<div class="glide" data-carousel='{
		"perView": 3,
		"type": "slider",
		"bound": "true",
		"equalHeights": "true",
		"peek": {
			"before": 0,
			"after": 75
		},
		"breakpoints": {
			"768": {
				"perView": 2
			},
			"480": {
				"perView": 1
			}
		}
	}'>
		<div class="glide__track" data-glide-el="track">
			<ul class="glide__slides">
				<?php if($bakingbags->have_posts()): ?>
					<?php while($bakingbags->have_posts()): $bakingbags->the_post(); ?>
							<li class="glide__slide baking-bag">
								<img src="<?= get_the_post_thumbnail_url() ?>" alt="<?= get_the_title() ?>">
								<h4><?= get_the_title() ?></h4>
								<a class="btn" href="<?= get_the_permalink() ?>"><span>Koop nu</span></a>
							</li>
					<?php endwhile; ?>
				<?php else: ?>
					<p>Please add some baking bags!</p>
				<?php endif; ?>
			</ul>
		</div>
	</div>
</section>