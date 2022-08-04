import { Component } from "../core/component.js";
import { Form } from "../core/form.js";
import { Storage } from "../core/storage.js";
import { Validator } from "../core/validators.js";
import { pageApplication } from "../main.js";

export class SingUpComponent extends Component {
  constructor(id, page) {
    super(id);
    this.page = page;
  }

  init() {
    this.component.addEventListener("submit", onSubmitHandler.bind(this));
    this.formData = new Form(this.component, {
      name: [Validator.required],
      email: [Validator.required, Validator.isEmailValid],
      password: [Validator.required, Validator.isPasswordValid],
    });
    console.log(this.component);
  }

  onHide() {
    this.formData.clear();
  }
}

function onSubmitHandler(e) {
  e.preventDefault();
  console.log(this.formData.isValid());
  if (this.formData.isValid()) {
    const formData = {
      ...this.formData.value(),
      id: new Date().getTime(),
      todoList: [],
      theme: "gray",
    };

    console.log(formData);
    const userId = Storage.createNewUser(formData)
    if (!userId) return
    localStorage.setItem('selectedUserId', userId)
    this.page.hide();
    pageApplication.show();
  }
}
