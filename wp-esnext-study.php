<?php
/*
 * Plugin Name: WP ESNext Study
 * Author:      changwoo
 * Author URI:  https://blog.changwoo.pe.kr
 * Description: ES Next 기반 개발을 위한 자습입니다.
 * Plugin URI:  https://github.com/changwoo-study/wp-esnext-study
 */

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

define( 'WES_MAIN', __FILE__ );
define( 'WES_VERSION', '' );

/*
 * node, npm 설치는 되어 있나요?
 * `node -v`, `npm -v`를 각각 실행해 설치를 확인하세요.
 * 만약 node 가 없다면 node, npm 설치를 진행하세요.
 *
 * 우분투 리눅스 계열이라면
 * sudo apt install nodejs npm
 * 으로 쉽게 설치 가능합니다.
 *
 * 개인적으로 npm 보다 yarn을 선호하여 yarn 설치를 권장합니다.
 * https://classic.yarnpkg.com/en/docs/install#debian-stable
 * 위 링크를 통해 yarn 설치도 겸해 주세요.
 * `yarn -v`로 설치를 확인하세요.
 */

/*
 * package.json 파일은 생성되어 있나요?
 * package.json 파일이 없다면 `yarn init`으로 생성합니다.
 * package.json 파일의 스키마는 아래 링크를 참고하세요.
 * https://docs.npmjs.com/files/package.json
 */

/*
 * 이제 개발 셋업을 시작합니다.
 *
 * 먼저 @wordpress/scripts 설치를 추천합니다.
 * 워드프레스 코어 개발자들이 미리 프론트엔드 (정확히는 블록 에디터) 개발에 필요한 여러 설정을 미리 잘 만들어둔
 * 패키지입니다. 매번 어려운 설정을 할 필요 없이, 이것만으로 대부분의 중요한 설정을 빠르게 끝낼 수 있습니다.
 *
 * 이제 package.json 에 "scripts"와 "license"를 넣습니다.
 * 지금은 아래처럼 넣으면 충분합니다.
 *
 * "scripts": {
 *    "start": "wp-scripts start",
 *    "build": "wp-scripts build"
 * },
 * "license": "GPL-2.0-or-later"
 *
 * 차후 보다 복잡한 설정은 package.json 문서와,
 * https://www.npmjs.com/package/@wordpress/scripts 문서를 참고해 진행하세요.
 */

/*
 * 리액트로 Hello, World!
 *
 * 이 예제를 실행하고 싶다면 include 주석을 해제하세요.
 */
// include __DIR__ . '/01-react-hello-world/index.php';

/*
 * 가장 간단한 블록 에디터를 만들어 봅니다.
 */
// include __DIR__ . '/02-block-editor-hello-world/index.php';

/*
 * 사이드바에서 Hello, World!
 *
 * 플러그인 사이드바를 추가하는 예제입니다. 이 예제를 실행하려면 include 주석을 해제하세요.
 */
// include __DIR__ . '/03-sidebar-hello-world/index.php';

/*
 * ESNext #4: 블록 에디터 속성
 */
// include __DIR__ . '/04-attributes/index.php';

/*
 * ESNext #5: 동적 렌더링과 사이드바에 커스텀 필드 편집
 */
// include __DIR__ . '/05-dynamic-render/index.php';

/*
 * ESNext #6: Hooks.
 */
// include __DIR__ . '/06-hooks/index.php';

/*
 * ESNext #7: Redux Heloo, World!
 */
include __DIR__ . '/07-redux-hello-world/index.php';
