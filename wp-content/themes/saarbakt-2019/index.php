<?php 
get_header();
?>

<section class="sb-container sb-two-col list">
	<div>
		<h2 class="sb-page-title">Meest recente recepten</h2>
		<?php query_posts( 'posts_per_page=4' ); ?>
		<?php if(have_posts()): while(have_posts()): the_post() ?>
			<?= get_template_part('components/sb_recipe-post') ?>
		<?php endwhile; endif; ?>

		<?php wp_pagenavi(); ?>
	</div>
	<?= get_template_part('components/sb_instagram') ?>
</section>

<?php 
get_footer();
?>