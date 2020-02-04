<?php 

$buildVersion = '1.0.15';

require get_theme_file_path('/inc/search-route.php');

function saarbakt_theme_files() {
	wp_enqueue_style('saarbakt_styles', get_stylesheet_directory_uri() . '/assets/styles/main.css', array(), $buildVersion);
	wp_enqueue_script( 'saarbakt_scripts', get_template_directory_uri() . '/assets/scripts/main.js', array(), $buildVersion, true );
	wp_enqueue_script( 'saarbakt_nav', get_template_directory_uri() . '/assets/scripts/sb_nav.js', array(), $buildVersion, true );
	wp_enqueue_script( 'saarbakt_search', get_template_directory_uri() . '/assets/scripts/sb_search.js', array(), $buildVersion, true );

	if(is_front_page()) {
		wp_enqueue_script( 'saarbakt_home_scripts', get_template_directory_uri() . '/assets/scripts/home.js', array(), $buildVersion, true );
	}
}

add_action('wp_enqueue_scripts', 'saarbakt_theme_files');

function enqueue_fonts() {
	wp_enqueue_style('quicksand', 'https://fonts.googleapis.com/css?family=Quicksand&display=swap', false);
	wp_enqueue_style('roboto-fonts', 'https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap', false);
	wp_enqueue_style('font_awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css', array(), $buildVersion, false);
}

add_action('wp_enqueue_scripts', 'enqueue_fonts');

function saarbakt_features() {
	register_nav_menu('headerMenuLocation', 'Header Menu Location');
	register_nav_menu('footerMenuLocation', 'Footer Menu Location');
	add_theme_support('title-tag');
	add_theme_support( 'post-thumbnails');
	add_image_size('thumbnailimage', 150, auto, false);
	add_image_size('header_mobile', 768, auto, false);
	add_image_size('header_full', 1500, auto, false);
	add_image_size('image_mobile', 500, auto, true);
	add_post_type_support( 'page', 'excerpt' );
}
add_action('after_setup_theme', 'saarbakt_features');

// disable for posts
add_filter('use_block_editor_for_post', '__return_false', 10);

function wpb_move_comment_field_to_bottom( $fields ) {
	$comment_field = $fields['comment'];
	unset( $fields['comment'] );
	$fields['comment'] = $comment_field;

	$cookie_field = $fields['cookies'];
	unset( $fields['cookies'] );
	$fields['cookies'] = $cookie_field;
	return $fields;
}
	
add_filter( 'comment_form_fields', 'wpb_move_comment_field_to_bottom' );

/**
 * Filter the upload size limit for non-administrators.
 *
 * @param string $size Upload size limit (in bytes).
 * @return int (maybe) Filtered size limit.
 */
function filter_site_upload_size_limit( $size ) {
    // Set the upload size limit to 60 MB for users lacking the 'manage_options' capability.
    if ( ! current_user_can( 'manage_options' ) ) {
        // 60 MB.
        $size = 60 * 1024 * 1024;
    }
    return $size;
}
add_filter( 'upload_size_limit', 'filter_site_upload_size_limit', 20 );

@ini_set( 'upload_max_size' , '64M' );
@ini_set( 'post_max_size', '64M');
@ini_set( 'max_execution_time', '300' );