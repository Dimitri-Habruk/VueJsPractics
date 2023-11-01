import Uinput from './Uinput.vue'
import PropsChildren from './PropsChildren.vue'
import Uradio from './Uradio.vue'
import Ucheckbox from './Ucheckbox.vue'
import ReviewForm from '../ReviewForm.vue'



const components = [
    {componentName: 'Uinput', component: Uinput},
    {componentName: 'PropsChildren', component: PropsChildren},
    {componentName: 'Uradio', component: Uradio},   
    {componentName: 'Ucheckbox', component: Ucheckbox},   
    {componentName: 'ReviewForm', component: ReviewForm},   
]

export default {
    install(app){
        components.forEach(({componentName, component}) =>{
            app.component(componentName, component)
        })
    }
}