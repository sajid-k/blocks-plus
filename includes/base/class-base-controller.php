<?php

/**
 * @since      1.0.0
 * @package    Blocks_Plus
 * @subpackage Blocks_Plus/includes
 * @author     Sajid Khan <sajid.cs08@gmail.com>
 */

namespace Inc\base;

class Base_Controller {

	public $blocks_plus_path;
	public $blocks_plus_url;

	public function __construct() {
		$this->blocks_plus_path = plugin_dir_path( __FILE__ );
		$this->blocks_plus_url  = plugin_dir_url( __FILE__ );
		// echo BLOCKS_PLUS_URL . 'assets/admin/js/blocks-plus.js';
	}

}
