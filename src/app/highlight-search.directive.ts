import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightSearch]'
})
export class HighlightSearchDirective implements OnChanges {
  @Input('searchWord') searchWord: string;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.searchWord && this.searchWord) {
      this.highlightText(this.searchWord);
    }
  }
  private highlightText(searchTerm: string) {
    const content = this.el.nativeElement.textContent;
    const regex = new RegExp(searchTerm, 'gi');
    //this.el.nativeElement.innerHTML.background = 'red';
    const highlighted = content.replace(regex, `<mark>$&</mark>`);
    this.el.nativeElement.innerHTML = highlighted;
  }
}