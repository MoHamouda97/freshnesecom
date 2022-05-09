import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({}),
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ProductsService ]
    });
    service = TestBed.inject(ProductsService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });
  

  it('should call getProducts', () => {
    let spy = spyOn(service, 'getProducts').and.callFake( () => {
      return of(null)
    })
    service.getProducts(0, 0)
    expect(spy).toHaveBeenCalled()
  });

  it('should call search', () => {
    let spy = spyOn(service, 'search').and.callFake( () => {
      return of(null)
    })
    service.search('')
    expect(spy).toHaveBeenCalled()
  });

  it('test calling getProducts', (done: DoneFn) => {
    expect(service.getProducts(30, 0)).toBeTruthy()
    done();
  })

  it('test calling search', (done: DoneFn) => {
    expect(service.search('')).toBeTruthy()
    done();
  })
});
