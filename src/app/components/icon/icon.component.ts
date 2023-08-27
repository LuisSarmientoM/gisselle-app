import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  Optional,
  inject,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  @Input('name') iconName!: string;
  private svgIcon!: SVGElement;

  constructor(
    private http: HttpClient,
    private element: ElementRef<HTMLElement>,
    @Optional() @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit(): void {
    if (!this.iconName) throw new Error(`Icon "${this.iconName}" not found!`);
    this.http
      .get(`assets/icons/${this.iconName}.svg`, { responseType: 'text' })
      .subscribe((data) => {
        this.loadSvgElement(data);
      });
  }

  private loadSvgElement(data: string) {
    const div = this.document.createElement('DIV');

    div.innerHTML = data;

    this.svgIcon =
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.element.nativeElement.appendChild(this.svgIcon);
    this.element.nativeElement.querySelector('svg');
  }
}
