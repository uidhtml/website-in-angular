import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit {
  public type: string = 'Tips & Tricks';
  public title: string = 'Pure CSS Masonry Image Gallery';
  public date: string = '19th Sept 2019';
  public subTitle: string =
    'Never know what CSS can do for you, CSS column property will amaze you.';
  constructor() {}

  ngOnInit() {}
}
