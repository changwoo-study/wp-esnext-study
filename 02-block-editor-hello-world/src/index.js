import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';

/**
 * 블록 타입 등록.
 *
 * @link https://developer.wordpress.org/block-editor/developers/block-api/block-registration/
 */
registerBlockType('wp-esnext-study/wes02-hello-world', {
    title: __('WP ES Next #2 Hello, World!', 'wp-esnext-study'),
    description: __('"Hello, World!" sample for block editor.', 'wp-esnext-study'),
    category: 'common',
    edit() {
        /* 이 블록이 관리자 편집시 보이는 내용입니다. */
        return (
            <p>Hello, World!</p>
        )
    },
    save() {
        /* 이 블록이 저장될 때 내용입니다. */
        const helloText = __('WP ES Next #2 Hello, World!', 'wp-esnext-study');
        return (
            <p>{helloText}</p>
        )
    }
});
