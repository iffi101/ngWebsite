"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/pages/home.component");
var about_component_1 = require("./components/pages/about.component");
var profile_component_1 = require("./components/pages/profile.component");
var AppRoutes = [
    {
        path: '',
        component: home_component_1.homeComponent
    },
    {
        path: 'about',
        component: about_component_1.aboutComponent
    },
    {
        path: 'profile',
        component: profile_component_1.profileComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=app.routings.js.map