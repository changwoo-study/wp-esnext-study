<?php
/*
 * 06 hooks
 *
 * @link
 */

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

function wes06_enqueue_scripts() {
	$file = __DIR__ . '/build/index.asset.php';
	if ( file_exists( $file ) ) {
		$asset = include $file;
		if ( is_array( $asset ) && isset( $asset['dependencies'], $asset['version'] ) ) {
			wp_register_script(
				'wes06-hooks',
				plugins_url( 'build/index.js', __FILE__ ),
				$asset['dependencies'],
				$asset['version'],
				true
			);
		}
	}

	if ( wp_script_is( 'wes06-hooks', 'registered' ) && is_single( 'hooks-test' ) ) {
		wp_enqueue_script( 'wes06-hooks' );
	}
}

add_action( 'wp_enqueue_scripts', 'wes06_enqueue_scripts' );
