<?php
/*
 * ESNext #07: Redux Hello World
 *
 * @link: https://blog.changwoo.pe.kr/esnext-07-redux-hello-world/
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function wes07_enqueue_script() {
	$file = __DIR__ . '/build/index.asset.php';
	if ( file_exists( $file ) ) {
		$asset = include $file;
		if ( is_array( $asset ) && isset( $asset['dependencies'], $asset['version'] ) ) {
			wp_register_script(
				'wes07-redux-hello-world',
				plugins_url( 'build/index.js', __FILE__ ),
				$asset['dependencies'],
				$asset['version'],
				true
			);

			wp_localize_script(
				'wes07-redux-hello-world',
				'reduxHelloWorld',
				[
					'ajaxUrl' => admin_url( 'admin-ajax.php' ),
					'nonce'   => wp_create_nonce( 'wes07_nonce' ),
					'initial' => [ 'value' => 100 ],
				]
			);

			$css = __DIR__ . '/build/index.css';
			if ( file_exists( $css ) ) {
				wp_register_style(
					'wes07-redux-hello-world',
					plugins_url( 'build/index.css', __FILE__ ),
					[],
					$asset['version']
				);
			}
		}
	}
}

add_action( 'wp_enqueue_scripts', 'wes07_enqueue_script' );


function wes07_shortcode_callback() {
	if ( is_singular() ) {
		wp_enqueue_script( 'wes07-redux-hello-world' );
		wp_enqueue_style( 'wes07-redux-hello-world' );
		return '<div id="redux-hello-world"></div>';
	}

	return '';
}

add_shortcode( 'wes07', 'wes07_shortcode_callback' );