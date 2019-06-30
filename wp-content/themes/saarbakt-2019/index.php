<?php 
$imageUrl = get_field('voorpagina_foto');
$size;

if(wp_is_mobile()) {
	$size = 'image_mobile';
} else {
	$size = 'full';
}

$frontpageImage = wp_get_attachment_image($imageUrl, $size);

get_header();
?>

<section class="sb-frontpage-content">
	<?= get_template_part('components/sb_bakingbags') ?>
</section>

<?php 
get_footer();
?>