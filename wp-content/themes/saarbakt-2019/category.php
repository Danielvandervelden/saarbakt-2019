<?php 
get_header();

$category_query = new WP_Query( 
    array( 
		'paged' => get_query_var('paged'),
		'posts_per_page' => 4,
		'cat' => get_query_var('cat'),
    ) 
);
?>
<section class="sb-container sb-two-col list">
	<div>
		<h2 class="sb-page-title"><?= single_cat_title() ?></h2>
		<?php if($category_query->have_posts()): while($category_query->have_posts()): $category_query->the_post() ?>
			<?= get_template_part('components/sb_recipe-post') ?>
		<?php endwhile; endif; ?>
		
		<?= wp_pagenavi( array( 'query' => $category_query ) ); ?>
	</div>
	<?= get_template_part('components/sb_instagram') ?>
</section>
<?php 
get_footer();
?>