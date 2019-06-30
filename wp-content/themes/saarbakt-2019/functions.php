<?php 

function saarbakt_theme_files() {
	wp_enqueue_style('saarbakt_styles', get_stylesheet_directory_uri() . '/assets/styles/main.css', false);
	wp_register_script( 'saarbakt_scripts', get_template_directory_uri() . '/assets/scripts/main.js', array(), NULL, true );
    wp_enqueue_script( 'saarbakt_scripts' );
}

add_action('wp_enqueue_scripts', 'saarbakt_theme_files');