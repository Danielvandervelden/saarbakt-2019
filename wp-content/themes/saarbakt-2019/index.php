<?php 
get_header();

$query = new WP_Query( 
    array( 
		'paged' => get_query_var('paged'),
		'posts_per_page' => 4,
		'post_type' => 'post'
    ) 
);
?>
<section class="sb-container sb-two-col list">
	<div>
		<h2 class="sb-page-title">Meest recente recepten</h2>
		<?php if($query->have_posts()): while($query->have_posts()): $query->the_post() ?>
			<?= get_template_part('components/sb_recipe-post') ?>
		<?php endwhile; endif; ?>

		<?php wp_pagenavi( array( 'query' => $query ) ); ?>
	</div>
	<?= get_template_part('components/sb_instagram') ?>
</section>

<?php 
get_footer();
?>