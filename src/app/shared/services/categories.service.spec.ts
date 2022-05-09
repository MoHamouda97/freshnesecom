import { TestBed } from '@angular/core/testing';
import { CategoriesService } from './categories.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpMock: HttpTestingController
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CategoriesService ]
    });
    service = TestBed.inject(CategoriesService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('test calling getCategories', (done: DoneFn) => {
    expect(service.getCategories()).toBeTruthy()
    done();
  })  
});
