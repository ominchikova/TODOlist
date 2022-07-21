import {Component} from "../core/component.js";

export class SingUpComponent extends Component{
    constructor(id) {
        super(id);
    }
init(){
        this.component.addEventListener('submit', onSubmitHandler.bind(this))
this.formData = new Form (this.component,{
    name:'',
    email:'',
    password:''
})
    }
}
function onSubmitHandler(e){
    e.preventDefault()
   const formData = {
        ...this.formData.value()
   }
   console.log(formData)
}