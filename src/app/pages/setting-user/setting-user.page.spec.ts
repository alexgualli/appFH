import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingUserPage } from './setting-user.page';

describe('SettingUserPage', () => {
  let component: SettingUserPage;
  let fixture: ComponentFixture<SettingUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
