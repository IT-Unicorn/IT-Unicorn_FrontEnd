import questionPlatform from '../index'
import home from '../home/index'
import createProject from '../project/create'
import projectList from '../project/projectList'
export default {
    path: '/questionPlatform',
    component: questionPlatform,
    children:[
        {
            path:'/',
            name:'questionPlatform_index',
            component:home
        },
        {
            path:'/questionPlatform/createProject',
            name:'questionPlatform_createProject',
            component:createProject
        },
        {
            path:'/questionPlatform/projectList',
            name:'questionPlatform_projectList',
            component:projectList
        },
    ]
}