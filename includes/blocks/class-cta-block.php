<?php

/**
 * @since      1.0.0
 * @package    Blocks_Plus
 * @subpackage Blocks_Plus/includes
 * @author     Sajid Khan <sajid.cs08@gmail.com>
 */

namespace Inc\blocks;

class CTA_Block {

	public static function activate() {
		flush_rewrite_rules();
	}

}
