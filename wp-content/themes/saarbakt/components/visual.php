<header class="visual">
	<figure class="background-image">
		<picture>
			<source media="(max-width: 768px)" srcset="<?= wp_get_attachment_image_src( get_post_thumbnail_id( get_the_id() ), 'medium')[0] ?>">
			<source media="(min-width: 768px)" srcset="<?= wp_get_attachment_image_src( get_post_thumbnail_id( get_the_id() ), 'large')[0] ?>">
			<img src="<?= wp_get_attachment_image_src( get_post_thumbnail_id( get_the_id() ), 'large')[0] ?>" alt="">
		</picture>
	</figure>
	<figure id="logo">
		<picture>
			<source srcset="<?= get_template_directory_uri(); ?>/build/images/saarbaktlogo_small.webp" type="image/webp">
			<source srcset="<?= get_template_directory_uri(); ?>/build/images/saarbaktlogo_small.png" type="image/png">
			<img src="<?= get_template_directory_uri(); ?>/build/images/saarbaktlogo_small.png" alt="Saarbakt logo">
		</picture>
	</figure>
	<div class="visual__content">
		<?= get_the_content(); ?>
	</div>
</header>