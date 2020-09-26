<?php
function saarbakt_theme_files() {
	$buildVersion = '1.0.0';

	wp_enqueue_style('styles', get_stylesheet_directory_uri() . '/build/styles/style.css', array(), $buildVersion);
	wp_enqueue_script( 'js', get_template_directory_uri() . '/build/scripts/saarbakt.min.js', array(), $buildVersion, true );
}
add_action('wp_enqueue_scripts', 'saarbakt_theme_files');

/* Removing Wordpress version number for security */
function wpb_remove_version() {
	return '';
}
add_filter('the_generator', 'wpb_remove_version');

add_filter('use_block_editor_for_post', '__return_false', 10);
add_theme_support( 'post-thumbnails' );