import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTestingComponent } from './http-testing.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import {DataFetchService} from "./../data-fetch.service";

describe('HttpTestingComponent', () => {
  let component: HttpTestingComponent;
  let fixture: ComponentFixture<HttpTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ HttpTestingComponent ],
      providers:[DataFetchService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create component HttpTestingComponent",()=>{
    expect(component).toBeTruthy();
  })

  

    
});
