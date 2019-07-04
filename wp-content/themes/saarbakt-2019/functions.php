<?php 

function saarbakt_theme_files() {
	wp_enqueue_style('saarbakt_styles', get_stylesheet_directory_uri() . '/assets/styles/main.css', false);
	wp_register_script( 'saarbakt_scripts', get_template_directory_uri() . '/assets/scripts/main.js', array(), NULL, true );
	wp_register_script( 'saarbakt_home_scripts', get_template_directory_uri() . '/assets/scripts/home.js', array(), NULL, true );

	wp_enqueue_script( 'saarbakt_scripts' );

	if(is_front_page()) {
		wp_enqueue_script( 'saarbakt_home_scripts' );
	}
}

add_action('wp_enqueue_scripts', 'saarbakt_theme_files');

function enqueue_fonts() {
	wp_enqueue_style('indie-flower', 'https://fonts.googleapis.com/css?family=Indie+Flower&display=swap', false);
	wp_enqueue_style('roboto-fonts', 'https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap', false);
	wp_enqueue_script('font_awesome', 'https://kit.fontawesome.com/07f21c43b6.js', array(), NULL, false);
}

add_action('wp_enqueue_scripts', 'enqueue_fonts');

function saarbakt_features() {
	register_nav_menu('headerMenuLocation', 'Header Menu Location');
	register_nav_menu('footerMenuLocation', 'Footer Menu Location');
	add_theme_support('title-tag');
	add_theme_support( 'post-thumbnails');
	add_image_size('thumbnailimage', 150, auto, false);
	add_image_size('header_mobile', 768, auto, false);
	add_image_size('header_full', 2500, auto, false);
	add_image_size('image_mobile', 500, auto, true);
	add_post_type_support( 'page', 'excerpt' );
}
add_action('after_setup_theme', 'saarbakt_features');