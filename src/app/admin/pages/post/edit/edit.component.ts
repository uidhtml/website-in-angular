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
    creationDate: 'Wed Oct 30 2019 23:18:36 GMT+0530 (India Standard Time)',
    youtubeVideoId: 'xyzvq23gjd_v',
    bannerImageFile: '',
    shareImageFile: '',
    bannerImage: 'banner.jpg',
    shareImage: 'share.jpg',
    likes: 15,
    shared: 20,
    bookmarks: 27,
    body: {
      time: 1572728243834,
      blocks: [
        { type: 'paragraph', data: { text: 'ascascas' } },
        { type: 'paragraph', data: { text: 'gfgfgdfg' } },
        { type: 'header', data: { text: 'rggegg', level: 2 } },
        { type: 'list', data: { style: 'ordered', items: ['ghjhjhj'] } }
      ],
      version: '2.15.0'
    }
  };

  constructor() {}

  ngOnInit() {}
}
