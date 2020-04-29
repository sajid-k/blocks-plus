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

class Enqueue {

	public function register() {
		add_action( 'init', array( $this, 'enqueue' ) );
		add_filter( 'block_categories', array( $this, 'blocks_plus_categories' ), 10, 2 );
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

		wp_enqueue_script(
			'blocks-plus-js',
			BLOCKS_PLUS_URL . 'build/index.js',
			array(
				'wp-blocks',
				'wp-block-editor',
				'wp-components',
				'wp-i18n',
			),
			'1.1.1'
		);
		// wp_enqueue_script( 'blocks-plus-js', BLOCKS_PLUS_URL . 'assets/admin/js/blocks-plus.js', array( 'wp-blocks', 'wp-editor' ) );

		register_block_type( 'blocks-plus/cta-block', array(
			'editor_script' => 'blocks-plus-js',
		) );

	}

	function blocks_plus_categories( $categories, $post ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'blocks-plus-category',
					'title' => __( 'Blocks Plus', 'blocks-plus' ),
					'icon'  => 'screenoptions',
				),
			)
		);
	}

}
