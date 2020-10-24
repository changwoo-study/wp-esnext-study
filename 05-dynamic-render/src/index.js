import React from 'react';
import {registerBlockType} from '@wordpress/blocks';
import {PanelBody, PanelRow, TextControl} from '@wordpress/components';
import {withDispatch, withSelect} from '@wordpress/data';
import {PluginSidebar, PluginSidebarMoreMenuItem} from '@wordpress/edit-post';
import {registerPlugin} from '@wordpress/plugins';

/* 블록 타입을 등록 */
registerBlockType('wp-estnext-study/wes05-dynaic-render', {
    title: 'Dynamic Render',
    description: 'Dynamic render description.',
    category: 'common',
    attributes: {
        name: {
            type: 'string',
            default: 'John',
        },
        anotherName: {
            type: 'string',
            source: 'meta',
            meta: '_another_name',
        }
    },
    example: {
        name: 'John',
        anotherName: 'Jane',
    },
    edit({attributes, setAttributes}) {
        return (
            <>
                Hello, {attributes.name}, and {attributes.anotherName}!
                <hr/>
                {/* 'name' 속성은 블록 안에서 해결한다. */}
                <TextControl
                    label="Name"
                    value={attributes.name}
                    onChange={value => {
                        setAttributes({name: value});
                    }}
                />
            </>
        );
    },
    save() {
        return null; // render_callback 은 PHP 쪽이므로 save()는 아예 무시됩니다.
    }
});


let DynamicRender = ({anotherName, onChange}) => {
    return (
        <TextControl
            label="Another Name"
            value={anotherName}
            onChange={onChange}
        />
    );
}

// withSelect 로 DynamicRender 함수를 래핑.
DynamicRender = withSelect(select => {
    const {getEditedPostAttribute} = select('core/editor');
    return {
        anotherName: getEditedPostAttribute('meta')['_another_name']
    };
})(DynamicRender);

// withDispatch 로 DynamicRender 함수를 다시 래핑.
DynamicRender = withDispatch(dispatch => {
    const {editPost} = dispatch('core/editor');
    return {
        onChange(value) {
            editPost({meta: {_another_name: value}});
        }
    }
})(DynamicRender);

/* 플러그인 사이드바를 등록 */
registerPlugin('wes05-dynamic-render', {
    render() {
        return (
            <>
                <PluginSidebarMoreMenuItem target="wes05-dynamic-render">
                    Dynamic Render
                </PluginSidebarMoreMenuItem>
                <PluginSidebar
                    name="wes05-dynamic-render"
                    title="Dynamic Render"
                >
                    <PanelBody
                        title="AnotherName Panel"
                        initialOpen={true}
                    >
                        <PanelRow>
                            <DynamicRender/>
                        </PanelRow>
                    </PanelBody>
                </PluginSidebar>
            </>
        );
    }
});
