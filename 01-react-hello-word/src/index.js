/*
ES Next #1: Hello, World!

리액트를 이용한 헬로 월드 스크립트 출력 예제입니다.
이제는 ES Next 문법을 이용해 스크립트를 작성합니다.
이렇게 소스 코드를 작성해도 실제 사용되는 스크립트는 이 파일이 아닌, build/index.js 파일입니다.

우리가 package.json 설정에서 @wordpress/scripts 패키지를 설치했고, 이 패키지는 'wp-scripts'라는 명령을
제공합니다. 아마 wp-scripts 명령이 올바르게 동작하면 그 결과로 build/index.js 파일을 생성하고,
워드프레스는 이 파일을 사용합니다.

사실 src/index.js 와 build/index.js는 의미적으로 동일합니다. 그러나 아직 웹브라우저가 ES Next, 즉 최신의 자바스크립트
문법을 모두 지원하는 것은 아니므로 어떤 브라우저에서는 src/index.js 의 내용을 제대로 이해하지 못할 수 있습니다.
호환성면에서 이렇게 되면 문제가 발생하므로 wp-scripts 에서는 이런 지원되지 않는 문법도 지원될 수 있도록
자바스크립트 파일을 한 번 더 번역하는 작업을 거칩니다. 이것을 트랜스파일이라 하며, 내부적으로는 babel이라는 패키지가
이런 번역을 담당합니다. 기계적으로 생성된 build/index.js 는 그러므로 원본의 파일보다 좀 더 복잡해 보입니다만,
아무튼 원본과 의미적으로는 동등합니다.

워드프레스 기본 옵션에 의하면 소스 코드 생성시 주석을 없애지 않습니다. 그러므로 만들어진 소스 코드를 열어 보면
지금 작성된 주석이 그대로 존재하는 것을 알 수 있습니다.

여기서 'wp-script start'를 실행한 이유도 추측 가능해집니다.
아직 개발자가 개발 중인 소스 코드는 계속 변경됩니다. 작성된 소스와 웹브라우저에서 실제 사용하는 파일이 각자 다르기 때문에
개발자가 계속 변경하는 코드는 실시간으로 모니터하면서 계속 빌드를 반복해 원본과 동등하도록 해야 합니다.
이것을 자동으로 해 주는 것이 바로 'wp-script start' 명령입니다.

조금씩 내용을 변경하면서 저장을 하면 모니터중인 wp-script 명령이 build/index.js, build/index.asset.php 파일을
갱신하는 것을 알 수 있습니다.
*/

/*
가장 먼저 React 라이브러리를 불러 오는 일입니다. 단, 여기서 다른 웹 프로젝트와 좀 다른 점이 있습니다.
블록 에디터가 이미 워드프레스 코어에 포함되어 있다면, 반드시 리액트 또한 워드프레스 코어 소스에 포함되어 있어야 한다는 뜻입니다.

사실 wp-includes/js/vendor 디렉토리에 react(.min).js, react-dom(.min).js 가 포함되어 있으며,
build/index.asset.php 의 'dependencies' 항목에는 'react', 'react-dom'이 포함되어 있을 것입니다.
이것은 원본 소스의 코드를 wp-script 가 분석해서 React를 참조하는 부분을 인식해서 특별히 처리하기 때문입니다.
그러므로 혹시 에디터 등에서 코드 분석을 위해 리액트를 필요로 한다면 react를 개발 의존성으로 참조해도 됩니다.
wp-script가 적절히 판단해 index.js 빌드시 node_modules에 있는 react 대신 코어의 react를 사용하도록 처리하기 때문입니다.

실제로 만들어진 페이지의 소스 코드를 열어서 react(.min).js 파일이 있는지, 있다면 어떤 경로에 있는지 체크해 보세요.
모든 리액트를 기반으로 하는 스크립트가 각자 저마다의 리액트 버전을 가지고 있다면 의존성 문제에서 심각한 문제가 발생할
겁니다. 그러므로 플러그인 제작시 워드프레스 코어에 있는 리액트 버전에 맞춰 제작하는 것이 좋습니다.
*/

import React from 'react';
import ReactDOM from 'react-dom';

function WesHelloWorld() {
    return (
        <>
            <h1>ES Next #1</h1>
            <p>Hello, World!</p>
        </>
    )
}

ReactDOM.render(<WesHelloWorld/>, document.getElementById('wes-hello-world'))
