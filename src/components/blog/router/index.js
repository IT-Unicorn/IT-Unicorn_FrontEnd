import blog from '../index'
import newStory from '../newStory'
import storyList from '../storyList'
export default {
    path: '/blog',
    component: blog,
    children:[
        {
            path:'/',
            name:'storyList',
            component:storyList
        },
        {
            path:'/blog/newStory',
            name:'newStory',
            component:newStory
        },
    ]
}