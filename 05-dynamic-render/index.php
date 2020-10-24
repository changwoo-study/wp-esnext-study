<?php
/*
 * 05 Dynamic Render
 *
 * @link https://blog.changwoo.pe.kr/esnext-5-%eb%8f%99%ec%a0%81-%eb%a0%8c%eb%8d%94%eb%a7%81%ea%b3%bc-%ec%82%ac%ec%9d%b4%eb%93%9c%eb%b0%94%ec%97%90-%ec%bb%a4%ec%8a%a4%ed%85%80-%ed%95%84%eb%93%9c-%ed%8e%b8%ec%a7%91/
 */

if ( ! defined( 'ABSPATH' ) ) {
	return;
}


function wes05_init() {
	// 커스텀 필드 (메타 필드) 하나를 설정합니다.
	register_meta(
		'post',
		/*
		 * 언더스코어(_)가 앞에 붙으면 protected 필드입니다.
		 * 구텐베르크를 쓰더라도 커스텀 필드 목록 메타 박스를 쓸 수 있는데, 언더스코어를 쓰지 않으면
		 * 등록된 필드값이 메타박스에 노출됩니다. 그러면 포스트 저장시 중복된 필드가 넘어와서 올바른 저장이 되지 않는
		 * 문제가 발생합니다. 가장 간단한 해결책은 지금처럼 필드를 보호 처리하는 것입니다.
		 */
		'_another_name',
		[
			'type'              => 'string',
			'description'       => 'Just another name.',
			'default'           => 'Jane',
			'single'            => true,
			'sanitize_callback' => 'sanitize_text_field',
			// 권한 콜백입니다. protected 처리된 필드는 코어가 반드시 이 콜백을 요구하므로 구현합니다.
			'auth_callback'     => function ( $allowed, $meta_key, $object_id, $user_id ) {
				if ( '_another_name' === $meta_key ) {
					$allowed = user_can( $user_id, 'edit_post', $object_id );
				}
				return $allowed;
			},
			'show_in_rest'      => true,
		]
	);

	// 스크립트 등록과, 해당 스크립트 안에 정의된 블록을 PHP 측에서 등록 처리.
	$file = __DIR__ . '/build/index.asset.php';
	if ( file_exists( $file ) && function_exists( 'register_block_type' ) ) {
		$asset = include $file;
		if ( is_array( $asset ) && isset( $asset['dependencies'], $asset['version'] ) ) {
			wp_register_script(
				'wes05-dynamic-render',
				plugins_url( 'build/index.js', __FILE__ ),
				$asset['dependencies'],
				$asset['version']
			);
			register_block_type(
				'wp-estnext-study/wes05-dynaic-render',
				[
					'editor_script'   => 'wes05-dynamic-render',  // 필수!
					'render_callback' => 'wes05_render_callback', // 동적 렌더링.
				]
			);
		}
	}
}

add_action( 'init', 'wes05_init' );


function wes05_enqueue_block_editor_assets() {
	wp_enqueue_script( 'wes05-dynamic-render' );
}

function wes05_render_callback( $block_attrs, $content ) {
	if ( is_admin() ) {
		echo '';
	} elseif ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
		echo '';
	} else {
		$post_id = get_the_ID();
		if ( $post_id && isset( $block_attrs['name'] ) ) {
			printf(
				'<div>Hello, %s, and %s!</div>',
				esc_html( $block_attrs['name'] ),
				esc_html( get_post_meta( $post_id, '_another_name', true ) )
			);
		}
	}
}

add_action( 'enqueue_block_editor_assets', 'wes05_enqueue_block_editor_assets' );
