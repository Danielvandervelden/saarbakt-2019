<?php 
$imageUrl = get_field('voorpagina_foto');
$size;

if(wp_is_mobile()) {
	$size = 'image_mobile';
} else {
	$size = 'full';
}

$frontpageImage = wp_get_attachment_image($imageUrl, $size);

$newsQuery = new WP_Query(array(
	'post_type' => 'nieuwtje',
	'posts_per_page' => '1'
));

$recipeQuery = new WP_Query(array(
	'post_type' => 'post',
	'posts_per_page' => '1'
));

get_header();
?>
	<?= get_template_part('components/sb_bakingbags') ?>
	
	<section class="sb-frontpage-content__latest">
		<div class="sb-frontpage-content__latest--news">
			<h2 class="sb-page-title">Laatste nieuws</h2>
			<?php if($newsQuery->have_posts()): while($newsQuery->have_posts()): $newsQuery->the_post() ?>
				<?= get_template_part('components/sb_news-post') ?>
			<?php endwhile; endif; ?>
		</div>
		<div class="sb-frontpage-content__latest--recipe list">
		<h2 class="sb-page-title">Nieuwste recept</h2>
		<?php if($recipeQuery->have_posts()): while($recipeQuery->have_posts()): $recipeQuery->the_post() ?>
				<?= get_template_part('components/sb_recipe-post') ?>
			<?php endwhile; endif; ?>
		</div>
	</section>
<?php 
get_footer();
?>