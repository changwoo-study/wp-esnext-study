<?php
/*
 * ESNext #4: 블록 에디터 속성
 *
 * @link https://blog.changwoo.pe.kr/esnext-4-%eb%b8%94%eb%a1%9d-%ec%97%90%eb%94%94%ed%84%b0-%ec%86%8d%ec%84%b1/
 */
if ( ! defined( 'ABSPATH' ) ) {
	return;
}

function wes04_init() {
	$file = __DIR__ . '/build/index.asset.php';
	if ( file_exists( $file ) && function_exists( 'register_block_type' ) ) {
		$asset = include $file;
		if ( is_array( $asset ) && isset( $asset['dependencies'], $asset['version'] ) ) {
			wp_register_script( 'wes04-attributes', plugins_url( 'build/index.js', __FILE__ ), $asset['dependencies'], $asset['version'] );
		}

		register_block_type( 'wp-esnext-study/wes04-attributes', [ 'editor_script' => 'wes04-attributes' ] );

		register_meta(
			'post',
			'_another_name',
			[
				'type'              => 'string',
				'description'       => 'Another name.',
				'default'           => 'Jane',
				'single'            => true,
				'sanitize_callback' => function ( $value ) {
					return sanitize_text_field( $value );
				},
				/**
				 * apply_filters( "auth_{$object_type}_meta_{$meta_key}", $allowed, $meta_key, $object_id, $user_id, $cap, $caps );
				 *
				 * @see map_meta_cap()
				 */
				'auth_callback'     => function ( $allowed, $meta_key, $object_id, $user_id ) {
					return user_can( $user_id, 'edit_post', $object_id );
				},
				'show_in_rest'      => true,
			]
		);
	}
}

function wes04_enqueue_script() {
	wp_enqueue_script( 'wes04-attributes' );
}

add_action( 'init', 'wes04_init' );
add_action( 'enqueue_block_editor_assets', 'wes04_enqueue_script' );
