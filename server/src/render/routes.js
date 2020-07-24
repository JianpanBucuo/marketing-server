import Home from './page/home'
import About from './page/about'
import App from './app'

export default [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/view',
                component: Home,
                exact: true,
                key: 'home'
            },
            {
                path: '/view/about',
                component: About,
                exact: true,
                key: 'about'
            }
        ]
    }
]