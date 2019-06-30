<?php
/*
Plugin Name: Baking Bags
*/
function saarbakt_bakingbags() {
    wp_register_script(
        'bakingbags',
        plugins_url( 'bakingbags.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element' )
    );
 
    register_block_type( 'saarbakt/bakingbags', array(
        'editor_script' => 'bakingbags',
    ) );
 
}
add_action( 'init', 'saarbakt_bakingbags' );