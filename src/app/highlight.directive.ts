import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{
  @Input() searchitem: string;
  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.searchitem) {
      this.highlight();
    }
  }
  private highlight(): void {
    if (this.searchitem) {
      const regex = new RegExp(this.searchitem, 'gi');
      const html = this.el.nativeElement.innerHTML;
      const newHtml = html.replace(regex, `<span class="highlight">${this.searchitem}</span>`);
      this.el.nativeElement.innerHTML = newHtml;
    }
  }
}
