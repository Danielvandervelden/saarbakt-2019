<?php
/**
 * Plugin Name: BakingBags
 * Author: Daniel van der Velden
 * Version: 1.0.0
 */
  
function saarbakt_bakingbags() {
  wp_enqueue_script(
    'saarbakt_bakingbags',
    plugin_dir_url(__FILE__) . 'bakingbags.js',
    array('wp-blocks','wp-editor'),
    true
  );
}
   
add_action('enqueue_block_editor_assets', 'saarbakt_bakingbags');