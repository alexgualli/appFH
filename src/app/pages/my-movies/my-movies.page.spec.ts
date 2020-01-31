import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyMoviesPage } from './my-movies.page';

describe('MyMoviesPage', () => {
  let component: MyMoviesPage;
  let fixture: ComponentFixture<MyMoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMoviesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
