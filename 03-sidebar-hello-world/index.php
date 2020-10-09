<?php

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

function wes03_init() {
	$file = __DIR__ . '/build/index.asset.php';
	if ( file_exists( $file ) ) {
		$asset = include $file;
		if ( is_array( $asset ) && isset( $asset['dependencies'], $asset['version'] ) ) {
			// 스크립트 삽입 처리.
			wp_register_script( 'wes03-hello-world', plugins_url( 'build/index.js', __FILE__ ), $asset['dependencies'], $asset['version'], true );
		}
	}
}

add_action( 'init', 'wes03_init' );


function wes03_enqueue_script() {
	wp_enqueue_script( 'wes03-hello-world' );
}

add_action( 'enqueue_block_editor_assets', 'wes03_enqueue_script' );
