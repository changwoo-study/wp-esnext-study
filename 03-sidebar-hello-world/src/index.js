import {registerPlugin} from "@wordpress/plugins";
import {PluginSidebar, PluginSidebarMoreMenuItem} from '@wordpress/edit-post';
import {Panel, PanelBody, PanelRow} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import React from 'react';

/**
 플러그인을 등록합니다.

 PluginSidebarMoreMenuItem:

 @link https://developer.wordpress.org/block-editor/packages/packages-plugins/
 @link https://developer.wordpress.org/block-editor/developers/slotfills/plugin-sidebar/
 @link https://developer.wordpress.org/block-editor/developers/slotfills/plugin-sidebar-more-menu-item/
 @link https://developer.wordpress.org/block-editor/components/panel/
 */
registerPlugin('wes3-plugin-hello-world', {
    icon: 'welcome-view-site', // dashicons 페이지(https://developer.wordpress.org/resource/dashicons/#editor-paste-text)에서 참고할 수 있습니다.
                               // dashicons-{아이디} 형태로 된 문자열의 아이디 부분을 복사합니다.
    render() {
        return (
            <>
                {/* 더보기 (...) 메뉴 클릭시 플러그인의 메뉴를 토글하기 위한 항목 추가입니다. */}
                <PluginSidebarMoreMenuItem target="wes3-plugin-hello-world">
                    {__('Hello, World!', 'wp-esnext-study')}
                </PluginSidebarMoreMenuItem>
                {/* 플러그인 사이드바가 그려질 때 사이드바의 내용을 출력하는 부분입니다. */}
                <PluginSidebar name="wes3-plugin-hello-world"
                               title={__('Hello, World!', 'wp-esnext-study')}
                               icon="welcome-view-site">
                    {/* @wordpress/components 패키지의 Panel을 사용했습니다. 레이아웃이 제법 맞아떨어져 보일 겁니다. */}
                    <Panel header={__('Hello, World! Panel', 'wp-esnext-study')}>
                        <PanelBody title={__('Hello, World! Body', 'wp-esnext-study')}
                                   icon="welcome-view-site"
                                   initialOpen={true}>
                            <PanelRow>
                                <p>{__('Hello, World! Content.', 'wp-esnext-study')}</p>
                            </PanelRow>
                        </PanelBody>
                    </Panel>
                </PluginSidebar>
            </>
        )
    }
});
