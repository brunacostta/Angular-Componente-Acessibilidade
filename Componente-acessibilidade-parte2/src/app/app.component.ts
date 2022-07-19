import { OnInit } from '@angular/core';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalRef } from './shared/components/modal/models/model-ref';
import {
  ModalService,
} from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'a11y-p2';
  public firstName = 'Bruna';
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  public modalRef: ModalRef;
  public info = false;
  public form: FormGroup;

  constructor(private modalService: ModalService, private formBuilder: FormBuilder) {}


  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Bruna', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false]
    })
  }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }

  public submit(): void {
    if (this.form.invalid){
      return;
    }
    console.log(this.form.value);
    this.modalRef.close();
  }
}
