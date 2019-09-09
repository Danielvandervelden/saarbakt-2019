<?php

function nieuwtjes() {
	register_post_type('nieuwtje', array(
		'public' => true,
		'show_in_rest' => true,
  		'rest_base' => 'nieuwtje',
		'labels' => array (
			'name' => 'Nieuwtje',
			'add_new_item' => 'Add New Nieuwtje',
			'edit_item' => 'Edit Nieuwtje',
			'all_items' => 'All Nieuwtjes',
			'singular_name' => 'Nieuwtje',
		),
		'menu_icon' => 'dashicons-clipboard',

	));
}

add_action('init', 'nieuwtjes');
//=====================================================================

function tipstricks() {
	register_post_type('tipstricks', array(
		'public' => true,
		'show_in_rest' => true,
  		'rest_base' => 'tipstricks',
		'labels' => array (
			'name' => 'Tips & Tricks',
			'add_new_item' => 'Add New Tip & Trick',
			'edit_item' => 'Edit Tip & Trick',
			'all_items' => 'All Tips & Tricks',
			'singular_name' => 'Tip & Trick',
		),
		'menu_icon' => 'dashicons-nametag',
		'supports' => array('thumbnail', 'editor'),
	));
}

add_action('init', 'tipstricks');
//=====================================================================

//=====================================================================

function bakingbags() {
	register_post_type('bakingbags', array(
		'public' => true,
		'show_in_rest' => true,
  		'rest_base' => 'bakingbags',
		'labels' => array (
			'name' => 'Baking Bags',
			'add_new_item' => 'Add New Baking Bag',
			'edit_item' => 'Edit Baking Bag',
			'all_items' => 'All Baking Bags',
			'singular_name' => 'Baking Bag',
		),
		'menu_icon' => 'dashicons-products',
		'supports' => array('thumbnail', 'title', 'editor'),
	));
}

add_action('init', 'bakingbags');
//=====================================================================

/**
  * Add REST API support to an already registered taxonomy.
  */
  add_action( 'init', 'my_custom_taxonomy_rest_support', 25 );
  function my_custom_taxonomy_rest_support() {
  	global $wp_taxonomies;

  	//be sure to set this to the name of your taxonomy!
  	$taxonomy_name = 'nieuwtjes';

  	if ( isset( $wp_taxonomies[ $taxonomy_name ] ) ) {
  		$wp_taxonomies[ $taxonomy_name ]->show_in_rest = true;
  		$wp_taxonomies[ $taxonomy_name ]->rest_base = $taxonomy_name;
  		$wp_taxonomies[ $taxonomy_name ]->rest_controller_class = 'WP_REST_Terms_Controller';
  	}

  $taxonomy_name = 'tipstricks';

  	if ( isset( $wp_taxonomies[ $taxonomy_name ] ) ) {
  		$wp_taxonomies[ $taxonomy_name ]->show_in_rest = true;
  		$wp_taxonomies[ $taxonomy_name ]->rest_base = $taxonomy_name;
  		$wp_taxonomies[ $taxonomy_name ]->rest_controller_class = 'WP_REST_Terms_Controller';
  	}

  }
