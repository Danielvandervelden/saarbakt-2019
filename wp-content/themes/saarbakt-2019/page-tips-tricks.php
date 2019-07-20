<?php 
get_header();

$tipstricksQuery = new WP_Query(array(
	'post_type' => 'tipstricks',
	'posts_per_page' => '4'
));

?>

<section class="sb-container sb-two-col list">
	<div>
		<h2 class="sb-page-title">Alle tips & tricks</h2>
		<?php if($tipstricksQuery->have_posts()): while($tipstricksQuery->have_posts()): $tipstricksQuery->the_post() ?>
			<?= get_template_part('components/sb_text-post') ?>
		<?php endwhile; endif; ?>

		<?php wp_pagenavi(); ?>
	</div>
	<?= get_template_part('components/sb_instagram') ?>
</section>

<?php 
get_footer();
?>