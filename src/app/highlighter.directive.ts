import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';
// import { hostname } from 'os';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 /*  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
    // throw new Error('Method not implemented.');
  } */

  /* @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
  }

  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
  } */
  @HostBinding('style.background') background:string = "red";

  @HostListener('mouseenter') mouseover(){
    this.background = "yellow";
  }
  @HostListener('mouseleave') mouseleave(){
    this.background = "red";
  }
}
