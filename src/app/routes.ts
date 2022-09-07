import { Router } from '@angular/router';

export const AppRoutes = (router?: Router) => ({

    get platform() {
        return {
            go() { router?.navigate(["/" + this.route]) },
            route: 'platform',
            main: 'platform',
            // get gifApp() {
            //     return {
            //         go() { router?.navigate(["/" + this.route]) },
            //         route: `${this.route}/gamification`,
            //         main: 'gamification',
            //         get add() {
            //             return {
            //                 go() { router?.navigate(["/" + this.route]) },
            //                 route: `${this.route}/add`,
            //                 main: 'add',
            //             };
            //         },
            //         get edit() {
            //             return {
            //                 go(id) { router?.navigate(["/" + this.route.replace(":id", id)]) },
            //                 route: `${this.route}/edit/:id`,
            //                 main: 'edit/:id',
            //             };
            //         },
            //     };
            // },
        }
    }

})