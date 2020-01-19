<?php
	$headerBackgroundImage;
	$headerLogo;

	if(wp_is_mobile()) {
		$headerLogo = get_stylesheet_directory_uri() . '/assets/images/saarbaktlogo_header.png';
	} else {
		$headerLogo = get_stylesheet_directory_uri() . '/assets/images/saarbaktlogo.png';
	}

	$blog_home = get_option('page_for_posts');

	if (is_front_page()) {
		if(wp_is_mobile()) {
			$headerBackgroundImage = get_the_post_thumbnail_url($homepage, 'header_mobile');
		} else {
			$headerBackgroundImage = get_the_post_thumbnail_url($homepage, 'header_full');
		}
	} elseif (is_home()) {
		if (wp_is_mobile()) {
			$headerBackgroundImage = get_the_post_thumbnail_url($blog_home, 'header_mobile');
		} else {
			$headerBackgroundImage = get_the_post_thumbnail_url($blog_home, 'header_full');
		}
	} elseif (strpos($url, 'nieuwtjes') !== false) {
		if (wp_is_mobile()) {
			$headerBackgroundImage = get_the_post_thumbnail_url(96, 'header_mobile');
		} else {
			$headerBackgroundImage = get_the_post_thumbnail_url(96, 'header_full');
		}
	} 
	elseif (strpos($url, 'tips-tricks') !== false) {
		if (wp_is_mobile()) {
			$headerBackgroundImage = get_the_post_thumbnail_url(101, 'header_mobile');
		} else {
			$headerBackgroundImage = get_the_post_thumbnail_url(101, 'header_full');
		}
	} elseif (strpos($url, 'contact') !== false) {
		if (wp_is_mobile()) {
			$headerBackgroundImage = get_the_post_thumbnail_url(101, 'header_mobile');
		} else {
			$headerBackgroundImage = get_the_post_thumbnail_url(101, 'header_full');
		}
	}
	else if ($headerBackgroundImage === NULL) {
		if (wp_is_mobile()) {
			$headerBackgroundImage = get_the_post_thumbnail_url($blog_home, 'header_mobile');
		} else {
			$headerBackgroundImage = get_the_post_thumbnail_url($blog_home, 'header_full');
		}
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
	<div class="search__container sb-container">
		<i class="fas fa-times search__close"></i>
		<div class="search__controls">
			<h5>Waar ben je naar op zoek?</h5>
			<input id="search-input" type="text">
		</div>

		<div class="search__results">

		</div>
	</div>
	<header class="sb-header" style="background-image: url(<?= $headerBackgroundImage ?>)">
		<?= get_template_part('components/sb_navigation') ?>
		<a href="<?= get_home_url() ?>"><h1><img src="<?= $headerLogo ?>" alt="SaarBakt door Sara van der Velden"></h1></a>
	</header>