import { TestBed, inject } from '@angular/core/testing';

import { JcpdService } from './jcpd.service';

describe('JcpdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JcpdService]
    });
  });

  it('should be created', inject([JcpdService], (service: JcpdService) => {
    expect(service).toBeTruthy();
  }));
});
