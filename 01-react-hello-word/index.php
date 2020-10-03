<?php

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

/*
 * 리액트로 Hello, World!를 출력하는 예제입니다.
 *
 * yarn install
 * yarn start
 *
 * 명령으로 시작하세요.
 */

/**
 * 스크립트 인큐잉.
 *
 * 워드프레스는 스크리립트 로딩시 코어에 등록, 삽입(큐잉)하는 방법으로 스크립트를 처리합니다.
 * 이렇게 하면 코어가 파일 버전이나 스크립트간 의존성을 판단하여 스크립트를 어디서 선언할지 판단할 수 있으며,
 * 혹시 타 개발자가 자신의 웹사이트에서 필요불가결하게 스크립트에 대한 수정을 해야 할 경우 본래 스크립트와
 * 그나마 덜 충돌하면서 개발을 할 수 있는 최후의 수단을 제공할 수 있게 합니다.
 */
function wes1528_enqueue_scripts() {
	/*
	 * wp-scripts 스크립트가 자동 생성하는 PHP 파일입니다.
	 * 이 파일은 단순히 하나의 연관배열을 리턴합니다.
	 * 이 연관배열에는 스크립트가 필요로 하는 의존성과 캐시를 무효화하기 위한 랜덤 버전 넘버가 담겨 있습니다.
	 */
	$file = plugin_dir_path( __FILE__ ) . '/build/index.asset.php';
	if ( file_exists( $file ) ) {
		$index_asset = include $file;
		if ( is_array( $index_asset ) && isset( $index_asset['dependencies'] ) && isset( $index_asset['version'] ) ) {
			wp_register_script( 'wes1528-hello-world', plugins_url( 'build/index.js', __FILE__ ), $index_asset['dependencies'], $index_asset['version'] );
		}
	}
}

add_action( 'admin_enqueue_scripts', 'wes1528_enqueue_scripts' );


/**
 * 관리자 메뉴 등록.
 *
 * @uses wes1528_output_menu()
 */
function wes1528_admin_menu() {
	add_menu_page( 'WP ES Next #1', 'WP ES Next #1', 'read', 'wes1528-1', 'wes1528_output_menu' );
}

/**
 * 관리자 메뉴 출력 콜백.
 *
 * @used-by wes1528_admin_menu()
 */
function wes1528_output_menu() {
	/*
	 * 프론트엔드 프레임워크를 사용하게 되면서 PHP 역할이 많이 축소됩니다.
	 * 필요한 메뉴 출력시 리액트가 필요한 최상위 노드를 지정하는 것으로 전부입니다.
	 *
	 * 스크립트가 잘 등록되었으면 큐잉합니다.
	 * 헤더가 이미 불린 이후이므로 스크립트는 body 태그가 끝나기 전에 출력될 것입니다.
	 */
	echo "<div class='wrap' id='wes-hello-world'></div>\n";

	if ( wp_script_is( 'wes1528-hello-world', 'registered' ) ) {
		wp_enqueue_script( 'wes1528-hello-world' );
	}
}

add_action( 'admin_menu', 'wes1528_admin_menu' );
