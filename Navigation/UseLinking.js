import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function (containerRef) {
    return useLinking(containerRef, {
        prefixes: [Linking.makeUrl('/')],
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
