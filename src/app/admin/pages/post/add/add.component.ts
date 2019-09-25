import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validator,
  FormArray,
  Validators,
  FormGroupDirective
} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public sendEventToEditor: EventEmitter<boolean> = new EventEmitter();
  public form: FormGroup;
  @ViewChild(FormGroupDirective, { static: true })
  private formGroupDirective: FormGroupDirective;

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      category: ['', Validators.compose([Validators.required])],
      subCategory: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      metaTags: this.formBuilder.group({
        title: ['', Validators.compose([Validators.required])],
        description: ['', Validators.compose([Validators.required])],
        keywords: ['', Validators.compose([Validators.required])]
      }),
      creationDate: [new Date()],
      likes: [0],
      shared: [0],
      body: []
    });
  }

  ngOnInit() {}

  getEditorData(editorData) {
    if (editorData.blocks.length === 0) {
      console.log('Empty');
    } else {
      console.log(editorData);
    }
  }
  submit() {
    this.sendEventToEditor.emit(true);
  }
  resetForm() {
    this.formGroupDirective.resetForm();
  }
}
