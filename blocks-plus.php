<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              n/a
 * @since             1.0.0
 * @package           Blocks_Plus
 *
 * @wordpress-plugin
 * Plugin Name:       Blocks Plus
 * Plugin URI:        n/a
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Sajid Khan
 * Author URI:        n/a
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       blocks-plus
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) {
	require_once dirname( __FILE__ ) . '/vendor/autoload.php';
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'BLOCKS_PLUS_VERSION', '1.0.0' );
define( 'BLOCKS_PLUS_PATH', plugin_dir_path( __FILE__ ) );
define( 'BLOCKS_PLUS_URL', plugin_dir_url( __FILE__ ) );
define( 'BLOCKS_PLUS', plugin_basename( __FILE__ ) );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-activate.php
 */
function activate_blocks_plus() {
	Inc\base\Activate::activate();
}
register_activation_hook( __FILE__, 'activate_blocks_plus' );

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-deactivate.php
 */
function deactivate_blocks_plus() {
	Inc\base\Deactivate::deactivate();
}
register_deactivation_hook( __FILE__, 'deactivate_blocks_plus' );

if ( class_exists( 'Inc\\Init' ) ) {
	Inc\Init::register_classes();
}
//
// /**
//  * Currently plugin version.
//  * Start at version 1.0.0 and use SemVer - https://semver.org
//  * Rename this for your plugin and update it as you release new versions.
//  */
// define( 'BLOCKS_PLUS_VERSION', '1.0.0' );
//
// /**
//  * The code that runs during plugin activation.
//  * This action is documented in includes/class-blocks-plus-activator.php
//  */
// function activate_blocks_plus() {
// 	require_once plugin_dir_path( __FILE__ ) . 'includes/class-blocks-plus-activator.php';
// 	Blocks_Plus_Activator::activate();
// }
//
// /**
//  * The code that runs during plugin deactivation.
//  * This action is documented in includes/class-blocks-plus-deactivator.php
//  */
// function deactivate_blocks_plus() {
// 	require_once plugin_dir_path( __FILE__ ) . 'includes/class-blocks-plus-deactivator.php';
// 	Blocks_Plus_Deactivator::deactivate();
// }
//
// register_activation_hook( __FILE__, 'activate_blocks_plus' );
// register_deactivation_hook( __FILE__, 'deactivate_blocks_plus' );
//
// /**
//  * The core plugin class that is used to define internationalization,
//  * admin-specific hooks, and public-facing site hooks.
//  */
// require plugin_dir_path( __FILE__ ) . 'includes/class-blocks-plus.php';
//
// /**
//  * Begins execution of the plugin.
//  *
//  * Since everything within the plugin is registered via hooks,
//  * then kicking off the plugin from this point in the file does
//  * not affect the page life cycle.
//  *
//  * @since    1.0.0
//  */
// function run_blocks_plus() {
//
// 	$plugin = new Blocks_Plus();
// 	$plugin->run();
//
// }
// run_blocks_plus();
