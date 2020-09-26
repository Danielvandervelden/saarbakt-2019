<?php $categories = get_categories() ?>

<section class="category-grid">
	<h2 class="page-title">Verschillende recepten</h2>
	<div class="category-grid__wrapper">
		<?php foreach($categories as $category): ?>
			<a href="<?= get_category_link($category->term_id) ?>" class="category-grid__item">
				<span><?= $category->name ?></span>
				<?php if(z_taxonomy_image_url($category->term_id, 'thumbnail')): ?>
					<img src="<?= z_taxonomy_image_url($category->term_id, 'thumbnail'); ?>" alt="<?= $category->name ?> category image">
				<?php else: ?>	
					<figure id="logo">
						<picture>
							<source srcset="<?= get_template_directory_uri(); ?>/build/images/saarbaktlogo_small.webp" type="image/webp">
							<source srcset="<?= get_template_directory_uri(); ?>/build/images/saarbaktlogo_small.png" type="image/png">
							<img src="<?= get_template_directory_uri(); ?>/build/images/saarbaktlogo_small.png" alt="Saarbakt logo">
						</picture>
					</figure>
				<?php endif; ?>
				</a>
		<?php endforeach; ?>
	</div>
</section>