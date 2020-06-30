import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardWithIdPage } from './dashboard-with-id.page';

describe('DashboardWithIdPage', () => {
  let component: DashboardWithIdPage;
  let fixture: ComponentFixture<DashboardWithIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWithIdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardWithIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
