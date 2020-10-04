<?php

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

/*
 * 블록 에디터를 위한 간단한 Hello, World 블록을 만듭니다.
 *
 * yarn install
 * yarn start 명령으로 시작하세요.
 */


/**
 * 스크립트 인큐잉.
 */
function wes02_init() {
	// 다국어 파일 로드.
	load_plugin_textdomain( 'wp-esnext-study', false, wp_basename( dirname( __DIR__ ) ) . '/languages' );

	$file = plugin_dir_path( __FILE__ ) . '/build/index.asset.php';
	if ( file_exists( $file ) ) {
		$asset = include $file;
		if ( is_array( $asset ) && isset( $asset['dependencies'], $asset['version'] ) ) {
			// 스크립트 삽입 처리.
			wp_register_script( 'wes02-hello-world', plugins_url( 'build/index.js', __FILE__ ), $asset['dependencies'], $asset['version'], true );
		}

		/*
		 * 블록 등록.
		 *
		 * 'editor_script'로 등록한 블록이 어떤 스크립트와 연관되는지 지정한다.
		 */
		if ( function_exists( 'register_block_type' ) ) {
			register_block_type( 'wp-esnext-study/wes02-hello-world', [ 'editor_script' => 'wes02-hello-world' ] );
		}
	}
}

add_action( 'init', 'wes02_init' );


/**
 * 변역 파일 상대 경로 보정.
 *
 * 플러그인 내 01, 02 식으로 여러개의 내부 기능을 정의하기 때문에 wp i18n make-json 이 생성하는 md5 해시와
 * 코어에서 생각하는 md5 해시값이 차이가 난다. WP CLI 에서 이런 경로 차이를 보간할 수 있도록 명령어 옵션이 있어야 하는데
 * 이 코드를 작성하는 시점인 WP CLI v2.4.0에는 이런 기능을 지원하지 않는다.
 * 이 필터를 제거하면 블록 에디터의 번역이 제대로 로드되지 않는다.
 *
 * @param string $relative
 *
 * @return string
 */
function wes02_adjust_relative( $relative ) {
	if ( '02-block-editor-hello-world/build/index.js' === $relative ) {
		$relative = 'build/index.js';
	}

	return $relative;
}

add_filter( 'load_script_textdomain_relative_path', 'wes02_adjust_relative' );


/**
 * 블록 에디터 스크립트 인큐잉.
 */
function wes02_block_editor_assets() {
	/*
	 * json 번역 파일을 설정.
	 */
	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations( 'wes02-hello-world', 'wp-esnext-study', __DIR__ . '/languages' );
	}
}

add_action( 'enqueue_block_editor_assets', 'wes02_block_editor_assets' );


/**
 * 관리자 메뉴 등록.
 *
 * @uses wes02_output_menu()
 */
function wes02_admin_menu() {
	add_menu_page( __( 'WP ES Next #2', 'wp-esnext-study' ), __( 'WP ES Next #2', 'wp-esnext-study' ), 'read', 'wes02', 'wes02_output_menu' );
}

/**
 * 관리자 메뉴 출력 콜백.
 *
 * @used-by wes02_admin_menu()
 */
function wes02_output_menu() {
	/*
	 * 번역 파일의 출력을 위해 만들어본 페이지입니다.
	 */
	echo '<div class="wrap">' . __( 'Hello, World, WP ES Next #2.', 'wp-esnext-study' ) . '</div>' . PHP_EOL;
}

add_action( 'admin_menu', 'wes02_admin_menu' );

/*
 * 번역 파일을 쉽게 만들어내려면 WP CLI를 사용하는 것이 좋다.
 *
 * POT 파일 생성.
 * 현재 파일이 있는 디렉토리에서 아래처럼 실행한다.
 * wp i18n make-pot . languages/wp-esnext-study.pot --domain=wp-esnext-study
 *
 * JSON 파일 생성.
 * POT 파일을 통해 po 파일 생성후, 번역을 진행합니다.
 * 해당 po 파일을 사용합니다.
 * 현재 파일이 있는 디렉토리에서 아래처럼 실행한다.
 * wp i18n make-json languages --no-purge
 */
