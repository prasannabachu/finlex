import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'finlex-project'`, () => {
    expect(component.title).toEqual('finlex-project');
  });

  it('should Contain Menu Button on top right', () => {
    const elem: HTMLElement = fixture.debugElement.nativeElement;
    const menuBtn: HTMLButtonElement = elem.querySelector('.menu-btn');
    expect(menuBtn.textContent).toContain('Menu');
    menuBtn.click();
  });

  it('should have location on the footer', () => {
    const elem: HTMLElement = fixture.debugElement.nativeElement;
    const menuBtn: HTMLButtonElement = elem.querySelector('.location');
    expect(menuBtn.textContent).toContain('LOCATION');
  });

  it('location should be exact on the footer <LOCATION>', () => {
    const elem: HTMLElement = fixture.debugElement.nativeElement;
    const menuBtn: HTMLButtonElement = elem.querySelector('.address');
    expect(menuBtn.textContent).toContain('FINLEX GmbH');
    expect(menuBtn.textContent).toContain('Ludwigstr.33-37');
    expect(menuBtn.textContent).toContain('60327 Frankfurt am Main');
  });

  it('should contain social media text on the footer', () => {
    const elem: HTMLElement = fixture.debugElement.nativeElement;
    const menuBtn: HTMLButtonElement = elem.querySelector('.social-media');
    expect(menuBtn.textContent).toContain('SOCIAL MEDIA');
  });

  it('should contain About info on the footer', () => {
    const elem: HTMLElement = fixture.debugElement.nativeElement;
    const menuBtn: HTMLButtonElement = elem.querySelector('.about');
    expect(menuBtn.textContent).toContain('ABOUT FINELEX');
  });

});
