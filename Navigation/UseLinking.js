import { useLinking } from '@react-navigation/native';

export default function (containerRef) {
    return useLinking(containerRef, {
        prefixes: '/',
        config: {
            Root: {
                path: 'main',
                screens: {
                    Links: 'links',
                    Status: 'status',
                    Home: 'home',
                    Settings: 'settings',
                },
            },
        },
    });
}
