<?php  // @codingStandardsIgnoreLine

/**
 * @since      1.0.0
 * @package    Blocks_Plus
 * @author     Sajid Khan <sajid.cs08@gmail.com>
 */

namespace Inc;

final class Init {

	/**
	 * Store all the classes inside an array
	 * @return array full list of class
	 */
	public static function get_classes() {
		return [
			base\Enqueue::class,
			base\Settings_Links::class,
		];
	}

	/**
	 * Loop through the classes, initialize them,
	 * and call the register method if it exists
	 * @return
	 */
	public static function register_classes() {
		foreach ( self::get_classes() as $class ) {
			$service = self::instantiate( $class );
			if ( method_exists( $service, 'register' ) ) {
				$service->register();
			}
		}
	}

	/**
	 * Initialize the class
	 * @param  class $class    class from the classes array
	 * @return class instance  new instance of the class
	 */
	private static function instantiate( $class ) {
		$service = new $class();
		return $service;
	}

}
