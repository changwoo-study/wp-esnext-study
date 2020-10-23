import {createBlock, registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import {TextControl} from "@wordpress/components";

/*
 attributes 관련 예제

 Hello, World! 다음에 특정 문자열을 붙일 수 있도록 합니다.

 @link https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/
 */
registerBlockType('wp-esnext-study/wes04-attributes', {
    title: __('WP ES Next #4 Hello, World!', 'wp-esnext-study'),
    description: __('"Hello, World!" sample for block editor.', 'wp-esnext-study'),
    category: 'common',
    transforms: {
        to: [
            {
                'type': 'block',
                'blocks': ['core/paragraph'],
                'transform': () => {
                    return createBlock('core/paragraph', {
                        content: __('Hello, World!', 'wp-esnext-study')
                    });
                }
            }
        ]
    },
    attributes: {
        name: {
            type: 'string',
            default: 'John',
        },
        anotherName: {
            type: 'string',
            source: 'meta',
            meta: '_another_name',
            default: 'Jane',
        }
    },
    edit({setAttributes, attributes}) {
        return (
            <>
                <p>{__('Hello, World!', 'wp-esnext-study')}, {attributes.name}, {attributes.anotherName}!</p>
                {/* 첫번째 입력 요소. Hello, World!, {이름}을 출력하게 합니다.
                 이 요소는 HTML 주석에 JSON 인코드 됩니다. */}
                <TextControl
                    label={__('Your Name', 'wp-esnext-study')}
                    value={attributes.name}
                    onChange={value => {
                        setAttributes({name: value});
                    }}
                />
                <TextControl
                    label={__('Another Name', 'wp-esnext-study')}
                    value={attributes.anotherName}
                    onChange={value => {
                        setAttributes({anotherName: value});
                    }}
                />
            </>
        );
    },
    save({attributes}) {
        return (
            <>
                <p>{__('Hello, World!', 'wp-esnext-study')}, {attributes.name}, {attributes.anotherName}!</p>
            </>
        );
    }
});
