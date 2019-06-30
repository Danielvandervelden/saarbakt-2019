<?php 

function saarbakt_theme_files() {
	wp_enqueue_style('saarbakt_styles', get_stylesheet_directory_uri() . '/assets/styles/main.css', false);
	wp_register_script( 'saarbakt_scripts', get_template_directory_uri() . '/assets/scripts/main.js', array(), NULL, true );
    wp_enqueue_script( 'saarbakt_scripts' );
}

add_action('wp_enqueue_scripts', 'saarbakt_theme_files');

function enqueue_fonts() {
	wp_enqueue_style('montserrat-fonts', 'https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap', false);
	wp_enqueue_style('roboto-fonts', 'https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap', false);
}

add_action('wp_enqueue_scripts', 'enqueue_fonts');