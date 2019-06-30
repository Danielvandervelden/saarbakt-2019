<?php
	$headerBackgroundImage;
	$headerLogo;

	if(wp_is_mobile()) {
		$headerBackgroundImage = get_the_post_thumbnail_url(null, 'header_mobile');
		$headerLogo = get_stylesheet_directory_uri() . '/assets/images/saarbaktlogo_header.png';

	} else {
		$headerBackgroundImage = get_the_post_thumbnail_url(null, 'header_full');
		$headerLogo = get_stylesheet_directory_uri() . '/assets/images/saarbaktlogo.png';
	}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<?php wp_head(); ?>
	<title><?php echo get_the_title() ?></title>
</head>
<body <?= body_class() ?>>
	<header class="sb-header" style="background-image: url(<?= $headerBackgroundImage ?>)">
		<?= get_template_part('components/sb_navigation') ?>
		<a href="<?= get_home_url() ?>"><h1><img src="<?= $headerLogo ?>" alt="SaarBakt door Sara van der Velden"></h1></a>
	</header>