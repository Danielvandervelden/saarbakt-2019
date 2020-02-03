<?php 
get_header();
?>
<div class="sb-breadcrumbs sb-container">
	<a href="<?= get_home_url()  ?>">Home</a> - <a href="<?= get_permalink( get_option( 'page_for_posts' ) )  ?>">Recepten</a> - <span><?= get_the_title() ?></span>
</div>
<section class="sb-container sb-two-col">
	<div class="sb-post-content">
		<?php the_content(); ?>
	</div>

	<div id="ingredients_container" class="sb-ingredients">
		<h4 class="sb-ingredient-title">Ingredienten</h4>
		<?php echo get_field('ingredienten') ?>
		<img src="<?= get_the_post_thumbnail_url(null, 'image_mobile') ?>" alt="<?= get_the_title() ?>">
	</div>
</section>

<section class="sb-comments sb-container">
	<?php comments_template() ?>
</section>

<?php 
get_footer();
?>