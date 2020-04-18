<?php

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Blocks_Plus
 * @subpackage Blocks_Plus/includes
 * @author     Sajid Khan <sajid.cs08@gmail.com>
 */

namespace Inc\base;

class Activate {

	public static function activate() {
		flush_rewrite_rules();
	}

}
