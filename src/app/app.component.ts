import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { CommonModule } from '@angular/common';
import { ModuleComponent } from './home/module/module.component';
// import { DUMMY_TASKS } from './dummy-tasks';
// interface DUMMY{
//     id: string;
//     todo: string;
//     time: string;
//     finish: string;
// };
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterOutlet,HeaderComponent,HomeComponent,AllComponent,ModuleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // all = DUMMY_TASKS<DUMMY[]>;
  @Input({required: true}) active!: string;
  // onTaskEdited(event: string) {
  //   console.log('Task edited event received:', event);
    
  // }
}
