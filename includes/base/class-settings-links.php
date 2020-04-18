<?php

/**
 * This class adds settings link on plugin's page.
 *
 * @since      1.0.0
 * @package    Blocks_Plus
 * @subpackage Blocks_Plus/includes
 * @author     Sajid Khan <sajid.cs08@gmail.com>
 */

namespace Inc\base;

class Settings_Links {

	public function register() {
		add_action( 'plugin_action_links_' . BLOCKS_PLUS, array( $this, 'custom_links' ) );
	}

	public function custom_links( $links ) {
		$new_link = '<a href="#">Website</a>';
		array_push( $links, $new_link );
		return $links;
	}

}
