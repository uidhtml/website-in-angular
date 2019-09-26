import {
  Component,
  OnInit,
  EventEmitter,
  ViewChild,
  Input
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validator,
  FormArray,
  Validators,
  FormGroupDirective
} from '@angular/forms';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public pageTitle: string;
  public sendEventToEditor: EventEmitter<boolean> = new EventEmitter();
  public form: FormGroup;
  @ViewChild(FormGroupDirective, { static: true })
  private formGroupDirective: FormGroupDirective;

  @Input() postData;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    if (this.postData) {
      this.pageTitle = 'edit';
      this.form.patchValue(this.postData);
    } else {
      this.pageTitle = 'add';
      this.form.controls.creationDate.setValue(new Date());
    }
  }

  initForm() {
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
      creationDate: this.formBuilder.control({ value: '', disabled: true }),
      bannerImage: this.formBuilder.control({
        value: 'Banner.jpeg',
        disabled: true
      }),
      shareImage: this.formBuilder.control({
        value: 'Share.jpeg',
        disabled: true
      }),
      likes: [''],
      shared: [''],
      body: ['']
    });
  }

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
