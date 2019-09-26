import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  public postData: {} = {
    title: 'Title',
    category: 'Gallery',
    subCategory: 'CSS',
    description: 'This is just a demo.',
    metaTags: {
      title: 'Meta Title',
      description: 'Meta Description',
      keywords: 'Meta Keywords'
    },
    creationDate: new Date(),
    likes: 0,
    shared: 0,
    body: 'I am body'
  };

  constructor() {}

  ngOnInit() {}
}
