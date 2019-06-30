<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<?php wp_head(); ?>
	<title><?php echo get_the_title() ?></title>
</head>
<body class="<?php body_class() ?>">
	<header class="sb-header">
		<div class="sb-header__wrapper">
			<a href="<?= get_home_url() ?>"><img src="" alt="SaarBakt Logo"></a>
			<?= get_template_part('components/sb_navigation') ?>
		</div>
	</header>