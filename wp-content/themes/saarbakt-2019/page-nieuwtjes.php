<?php 
get_header();

$newsQuery = new WP_Query(array(
	'post_type' => 'nieuwtje',
	'posts_per_page' => '5'
));

?>

<section class="sb-container sb-two-col list">
	<div>
		<h2 class="sb-page-title">Meest recente nieuws</h2>
		<?php if($newsQuery->have_posts()): while($newsQuery->have_posts()): $newsQuery->the_post() ?>
			<?= get_template_part('components/sb_text-post') ?>
		<?php endwhile; endif; ?>

		<?php wp_pagenavi(); ?>
	</div>
	<?= get_template_part('components/sb_instagram') ?>
</section>

<?php 
get_footer();
?>