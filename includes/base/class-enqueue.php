<?php

/**
 * This class includes all necessary plugin's js and css.
 *
 * @since      1.0.0
 * @package    Blocks_Plus
 * @subpackage Blocks_Plus/includes
 * @author     Sajid Khan <sajid.cs08@gmail.com>
 */

namespace Inc\base;

use \Inc\base\Base_Controller;

class Enqueue extends Base_Controller {

	public function register() {
		add_action( 'init', array( $this, 'enqueue' ) );
	}

	function enqueue() {

		// enqueue admin scripts
		if ( is_admin() ) {
			wp_enqueue_style( 'blocks-plus-style', BLOCKS_PLUS_URL . 'assets/admin/css/style.css' );
		}

		// enqueue front scripts
		if ( ! is_admin() ) {
			wp_enqueue_style( 'blocks-plus-style', BLOCKS_PLUS_URL . 'assets/front/css/style.css' );
			//wp_enqueue_style( 'blocks-plus-js', BLOCKS_PLUS_URL . 'assets/front/js/blocks-plus.js' );
		}

		wp_enqueue_script( 'blocks-plus-js', BLOCKS_PLUS_URL . 'assets/admin/js/blocks-plus.js', array( 'wp-blocks', 'wp-editor' ) );

		register_block_type( 'blocks-plus/cta-block', array(
			'editor_script' => 'blocks-plus-js',
		) );

	}

}
