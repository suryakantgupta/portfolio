import Home from "../components/Home/Home"

const getRoutes = () => {

    let childRoutes = []

    childRoutes.push({
        path: '/',
        exact: true,
        component: Home,
    })
    return childRoutes
}

export default getRoutes;