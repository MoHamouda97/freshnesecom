import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[scroll]'
})
export class ScrollDirective {
  @Output() scrollingEnd = new EventEmitter<void>();

  emitted = false;

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.emitted) {
      this.emitted = true;
      this.scrollingEnd.emit();
    } else if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
      this.emitted = false;
    }
  }
}