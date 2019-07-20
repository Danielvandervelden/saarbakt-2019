<?php 
get_header();
?>
<div class="sb-breadcrumbs sb-container">
	<a href="<?= get_home_url()  ?>">Home</a> - <a href="/tips-tricks">Tips & Tricks</a> - <span><?= get_the_title() ?></span>
</div>
<?= get_template_part('components/sb_single_text_post') ?>

<?php 
get_footer();
?>