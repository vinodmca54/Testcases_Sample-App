import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponentComponent } from './user-component.component';
import {UserService} from '../user.service';
import {HttpClientModule} from '@angular/common/http';

describe('UserComponentComponent', () => {
  let component: UserComponentComponent;
  let fixture: ComponentFixture<UserComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponentComponent ],
      providers: [UserService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
