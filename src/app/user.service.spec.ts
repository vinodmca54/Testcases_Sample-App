import { TestBed, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import {HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/catch';
describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
  it('Testing user data', (done) => {
    const  Userservice = TestBed.get(UserService);
    Userservice.getUsers().subscribe((users) => {
      expect(users).toBeDefined();
      expect(Array.isArray(users)).toBeTruthy();
      expect(users[0].id).toEqual(1);
      expect(users[0].id).not.toEqual(2);
      expect(users[0].username).toContain('Bert');
    }.catch((error));
  });
});
