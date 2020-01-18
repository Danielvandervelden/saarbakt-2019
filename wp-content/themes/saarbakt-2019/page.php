<?php 
get_header();
?>

<section class="sb-container sb-two-col list">
	<div>
		<h2 class="sb-page-title"><?= get_the_title() ?></h2>
		<div><?= the_content(); ?></div>
	</div>
	<?= get_template_part('components/sb_instagram') ?>
</section>

<?php 
get_footer();
?>