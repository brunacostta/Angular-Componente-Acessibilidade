import { Directive, OnDestroy, OnInit } from "@angular/core";

@Directive({
  selector: '[appFocusBack]'
})
export class FocusBackDirective implements OnInit, OnDestroy{

  private lastFocusedElementet: Element;

  public ngOnInit(): void {
    this.lastFocusedElementet = document.activeElement;
  }

  public ngOnDestroy(): void {
    if (this.lastFocusedElementet) {
      (this.lastFocusedElementet as HTMLElement).focus();
    }
  }
}
