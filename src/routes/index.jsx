import { Route } from 'react-router-dom'
import { lazy } from 'react'

const routes = [
    {
        path: "",
        element: lazy(() => import("../templates/Home")),
        nested: [
            {
                path: "/",
                element: lazy(() => import("../pages/Home")),
            },
            {
                path: "menu-page",
                element: lazy(() => import("../pages/Menu"))
            },
            {
                path: "services-page",
                element: lazy(() => import("../pages/Serv"))
            },
            {
                path: "memo-page",
                element: lazy(() => import("../pages/Memo"))
            },

        ]
    },

]

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.nested.map((item) => {
                        return <Route key={item.path} path={item.path} element={< item.element />} />
                    })}
                </Route>
            )
        } else {
            return <Route key={route.path} path={route.path} element={< route.element />} />
        }
    })
}
export default renderRoutes;