import { useEffect } from 'react';
import { Fragment } from 'react/jsx-runtime';

import { useAuthData } from '@deriv-com/api-hooks';

import { useStore } from '../../hooks/useStore';
import Dashboard from '../dashboard';

export default function Home() {
    const { isAuthorized } = useAuthData();
    const { ui } = useStore();
    const { setIsAuthorized } = ui;

    useEffect(() => {
        setIsAuthorized(isAuthorized);
    }, [isAuthorized, setIsAuthorized]);

    return (
        <Fragment>
            <div>Deriv-Bot&apos;s new Home!</div>
            <Dashboard />
        </Fragment>
    );
}
