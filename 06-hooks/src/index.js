/*
 * JS에서도 훅이 구현되어 있습니다. 알아봅시다.
 *
 * @link https://blog.changwoo.pe.kr/esnext-6-hooks/
 */

import {addAction, addFilter, doAction, applyFilters, doingAction, doingFilter} from '@wordpress/hooks';

(() => {
    let entryContent = document.querySelector('.entry-content');

    function actionCallback01(x, y, z) {
        entryContent.innerHTML += `<p>actionCallback01 called! ${x}, ${y}, ${z}</p>`;
    }

    function actionCallback02(x, y) {
        entryContent.innerHTML += `<p>actionCallback02 called! ${x}, ${y}</p>`;
    }

    function actionCallback03(x) {
        entryContent.innerHTML += `<p>actionCallback03 called! ${x}</p>`;
        if (doingAction('wes06-test-action')) {
            entryContent.innerHTML += '<p>Doing wes06-test-action.</p>';
        }
    }

    function filterCallback01(r, x, y, z) {
        ++r;
        entryContent.innerHTML += `<p>filterCallback01 called! ${r}, ${x}, ${y}, ${z}</p>`;
        return r;
    }

    function filterCallback02(r, x, y) {
        ++r;
        entryContent.innerHTML += `<p>filterCallback02 called! ${r}, ${x}, ${y}</p>`;
        return r;
    }

    function filterCallback03(r, x) {
        ++r;
        entryContent.innerHTML += `<p>filterCallback03 called! ${r}, ${x}</p>`;
        if (doingFilter('wes06-test-filter')) {
            entryContent.innerHTML += '<p>Doing wes06-test-filter.</p>';
        }
        return r + 10;
    }

    /*
    add_action() 의 JavaScript 버전. 파라미터는 약간 다르다.
    - hookName:  훅 이름. 이건 PHP 버전과 동일하다.
    - namespace: 네임스페이스. vendor/plugin/function 식으로 짓는다.
    - callback:  콜백 함수.
    - priority:  우선순위. 지정하지 않으면 10.
    */
    addAction('wes06-test-action', 'changwoo/wes06-hooks/index', actionCallback01, 30);
    addAction('wes06-test-action', 'changwoo/wes06-hooks/index', actionCallback02, 20);
    addAction('wes06-test-action', 'changwoo/wes06-hooks/index', actionCallback03, 10);

    doAction('wes06-test-action', 'x', 'y', 'z');

    addFilter('wes06-test-filter', 'changwoo/wes06-hooks/index', filterCallback01);
    addFilter('wes06-test-filter', 'changwoo/wes06-hooks/index', filterCallback02);
    addFilter('wes06-test-filter', 'changwoo/wes06-hooks/index', filterCallback03);

    let r = applyFilters('wes06-test-filter', 0, 'x', 'y', 'z');

    entryContent.innerHTML += `<p>Result of wes06-test-filer is ${r}</p>`;
})();
