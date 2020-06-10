(function () {

    const {__} = window.wp.i18n;

    const {registerBlockType} = window.wp.blocks;
    const {createElement} = wp.element;
    const {TextControl, Placeholder, Button} = wp.components;

    const socialmanIcon = createElement('svg', {
        width: 24,
        height: 22,
        viewBox: '0 0 99 91',
        className: 'dashicon'
    }, createElement('path', {
        fill: '#34495E',
        d: 'M33.1 52.1c1.7 2 3.5 3.4 5.1 4.4c1.7 1 3.4 1.5 5.1 1.5c1.6 0 2.8-0.4 3.9-1.3c1-0.8 1.5-1.9 1.5-3.2c0-1.4-0.4-2.5-1.3-3.3c-0.9-0.8-2.8-1.6-5.9-2.4c-4.2-1.1-7.2-2.6-8.9-4.4c-1.7-1.8-2.6-4.3-2.6-7.5c0-4.1 1.4-7.4 4.1-10c2.7-2.6 6.3-3.9 10.7-3.9c2.4 0 4.6 0.3 6.7 1c2.1 0.6 4.1 1.6 6 2.9l-3.7 8.4c-1.3-1.1-2.7-2-4.1-2.6c-1.4-0.6-2.8-0.9-4.1-0.9c-1.4 0-2.5 0.3-3.4 1s-1.3 1.5-1.3 2.6c0 1.1 0.4 1.9 1.2 2.6c0.8 0.6 2.3 1.3 4.5 1.8L47 39c4.8 1.3 7.9 2.7 9.4 4.2c1 1.1 1.8 2.3 2.3 3.8s0.8 3.1 0.8 4.9c0 4.6-1.5 8.2-4.5 11s-7 4.1-12 4.1c-3 0-5.7-0.5-8.2-1.5c-2.5-1-4.8-2.6-7.1-4.8L33.1 52.1z'
    }), createElement('path', {
        fill: '#34495E',
        d: 'M44 0C19.7 0 0 19.7 0 44s19.7 44 44 44s44-19.7 44-44S68.3 0 44 0z M44 79C24.7 79 9 63.3 9 44S24.7 9 44 9s35 15.7 35 35S63.3 79 44 79z'
    }));

    registerBlockType(
            'socialman/widget',
            {
                title: __('Socialman', 'socialman'),
                category: 'widgets',
                icon: socialmanIcon,
                keywords: [
                    __('Giveaway'),
                    __('Sweepstake'),
                    __('Contest')
                ],
                attributes: {
                    url: {
                        type: 'string',
                        selector: '.socialman-widget-block'
                    }
                },
                edit(props) {
                    function saveUrl(value) {
                        props.setAttributes({url: value});
                    }
                    return createElement(Placeholder, {
                        icon: socialmanIcon,
                        label: __('Socialman giveaway widget URL'),
                    }, createElement(TextControl, {
                        value: props.attributes.url,
                        onChange: saveUrl,
                        type: 'url',
                        className: 'socialman-widget-block',
                        placeholder: __('Paste your giveaway URL'),
                    }));
                },
                save() {
                    return null;
                }
            },
            );
})();
