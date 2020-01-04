import {
  Component,
  OnInit,
  EventEmitter,
  ViewChild,
  Input,
  ElementRef
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
  FormGroupDirective
} from '@angular/forms';
import { HttpService } from '@services/http.service';
import { ApiHostService } from '@services/api-host.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '@common/utility';
import { Router } from '@angular/router';
import { ROUTE_URLS } from '@app/route-urls.const';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public pageTitle: string;
  public isBodyEmpty: boolean = false;
  public form: FormGroup;
  public formData: FormData = new FormData();
  public bannerImageFile: File;
  public shareImageFile: File;
  @ViewChild(FormGroupDirective, { static: true })
  private formGroupDirective: FormGroupDirective;
  @ViewChild('bannerImageFileInput', { static: true })
  private bannerImageFileInput: ElementRef;
  @ViewChild('shareImageFileInput', { static: true })
  private shareImageFileInput: ElementRef;

  @Input() postData;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly apiHostService: ApiHostService,
    private readonly httpService: HttpService,
    private readonly router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    console.log(this.postData);
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
      title: [null, Validators.compose([Validators.required])],
      category: [null, Validators.compose([Validators.required])],
      subCategory: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      metaTags: this.formBuilder.group({
        title: [null, Validators.compose([Validators.required])],
        description: [null, Validators.compose([Validators.required])],
        keywords: [null, Validators.compose([Validators.required])]
      }),
      creationDate: this.formBuilder.control({ value: null, disabled: true }),
      youtubeVideoId: [null],
      bannerImage: [null, Validators.required],
      shareImage: [null, Validators.required],
      likes: this.formBuilder.control({ value: '0', disabled: true }),
      shared: this.formBuilder.control({ value: '0', disabled: true }),
      bookmarks: this.formBuilder.control({ value: '0', disabled: true }),
      body: [null, Validators.required],
      status: ['0']
    });
  }

  getEditorData(editorData: { time: number; blocks: []; version: string }) {
    if (editorData.blocks.length === 0) {
      this.isBodyEmpty = true;
    } else {
      this.isBodyEmpty = false;
      this.form.controls.body.setValue(JSON.stringify(editorData));
    }
  }

  browseImage($event, fileInputName: string) {
    $event.preventDefault();
    fileInputName === 'bannerImage'
      ? this.bannerImageFileInput.nativeElement.click()
      : this.shareImageFileInput.nativeElement.click();
  }

  getFileInputValue($event, inputName: string) {
    const file = $event.target.files[0];
    const reader = new FileReader();
    let imgURL;
    reader.readAsDataURL(file);
    reader.onload = event => {
      imgURL = reader.result;
      const preview = $event.target.nextElementSibling;
      preview.src = imgURL;
    };
    if (inputName === 'bannerImage') {
      this.bannerImageFile = file;
      this.form.controls.bannerImage.setValue(file.name);
    } else {
      this.shareImageFile = file;
      this.form.controls.shareImage.setValue(file.name);
    }
  }

  submit() {
    this.formData = this.createFormData(this.form.getRawValue());
    this.formData.append('bannerImageFile', this.bannerImageFile);
    this.formData.append('shareImageFile', this.shareImageFile);
    if (this.pageTitle !== 'edit') {
      this.httpService
        .postHttp(this.apiHostService.concatUrl('/add-post.php'), this.formData)
        .subscribe(
          (data: {
            success: number;
            title: string;
            msg: string;
            error?: {}[];
          }) => {
            if (data.success === 1) {
              this.openDialog(
                data.success,
                'Uidhtml says: Successful!!',
                data.msg
              );
            } else {
              this.openDialog(
                data.success,
                'Uidhtml says: Error!!',
                data.msg,
                data.error
              );
            }
          }
        );
    } else {
      this.httpService
        .putHttp(this.apiHostService.concatUrl('/edit-post.php'), this.formData)
        .subscribe(data => console.log(data));
    }
  }
  resetForm() {
    this.formGroupDirective.resetForm();
  }

  createFormData(object: {}, form?: FormData, namespace?: string): FormData {
    const formData = form || new FormData();
    for (const property in object) {
      if (!object.hasOwnProperty(property) || !object[property]) {
        continue;
      }
      const formKey = namespace ? `${namespace}[${property}]` : property;
      if (object[property] instanceof Date) {
        formData.append(formKey, object[property].toISOString());
      } else if (
        typeof object[property] === 'object' &&
        !(object[property] instanceof File)
      ) {
        this.createFormData(object[property], formData, formKey);
      } else {
        formData.append(formKey, object[property]);
      }
    }
    return formData;
  }

  openDialog(success: number, title: string, msg: string, error?: {}[]): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: { success, title, msg, error }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.router.navigate([
          `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.POST}/${ROUTE_URLS.ALL}`
        ]);
      }
    });
  }
}
