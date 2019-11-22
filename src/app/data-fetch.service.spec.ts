import { TestBed, } from '@angular/core/testing';
import { DataFetchService } from './data-fetch.service';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('DataFetchService', () => {

  beforeEach(() =>{ TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[DataFetchService]
  });

});


  describe(":",()=>{
    function setup() {
      const sharedService = TestBed.get(DataFetchService);
      const httpTestingController = TestBed.get(HttpTestingController);
      return { sharedService, httpTestingController };
  }

  it("should fetch data using httpClient",()=>{
    const { sharedService, httpTestingController } = setup();

    const mockdata=[{id:1,name:"arun",username:"prasath",email:"arun@gmil.com"}];
    sharedService.getData().subscribe(data=>{
      expect(data.mapData).toEqual(mockdata);
    });

    const req = httpTestingController.expectOne("./../assets/user.json");
    expect(req.request.method).toBe("GET");

    req.flush({
      mapData:mockdata
    })
    




  })

  afterEach(() => {
        const { httpTestingController } = setup();
        httpTestingController.verify();
      });

  })

  

  
});
