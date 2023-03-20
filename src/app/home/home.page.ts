import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ResolveStart, ResolveEnd, Router } from '@angular/router';
import { Observable, filter, map, tap } from 'rxjs';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loading$: Observable<boolean>;
  detectedElms: any = [];
  @ViewChild('my-div-1, my-div-2', { static: true }) content: any;
  // @ViewChild(IonContent) content: IonContent;
  contents = [
    'my-div-1',
    'my-div-2',
    
  ];
  constructor(private router: Router, private elementRef: ElementRef) {
    this.loading$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveStart || e instanceof ResolveEnd),
      map((e) => e instanceof ResolveStart),
      tap(() => {
        window.scroll({
          top: 0,
        });
      })
    );
  }

  onScroll(event: any) {
    // console.log(event);


    const scrollNativeEl =
      this.elementRef.nativeElement.querySelector('#my-content');
    // const divElement = scrollNativeEl.querySelector('div#my-div-1');

    const elms = scrollNativeEl.querySelectorAll('div#my-div-1, div#my-div-2');
    const detectedElms: any = [];
    elms.forEach((elm: any, index: any) => {
      const elementTop = elm.offsetTop;
      const elementBottom = elementTop + elm.offsetHeight;
      var viewportTop = event.detail.scrollTop;
      var viewportBottom = viewportTop + document.documentElement.clientHeight;
      if(
        elementBottom > viewportTop && elementTop < viewportBottom
      ) {
        detectedElms.push(elm.id);
        this.detectedElms = detectedElms;
      }      
       
    });
  }
}
