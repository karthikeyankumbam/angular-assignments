import { Component } from '@angular/core';
import { ActorFormComponent } from './template-driven-form/actor-form/actor-form.component';
import { NameEditorComponent } from "./reactive-forms/name-editor/name-editor.component";
import { ProfileEditorComponent } from "./reactive-forms/profile-editor/profile-editor.component";

@Component({
  selector: 'app-assignment-6',
  standalone: true,
  imports: [ActorFormComponent, NameEditorComponent, ProfileEditorComponent],
  templateUrl: './assignment-6.component.html',
  styleUrl: './assignment-6.component.css'
})
export class Assignment6Component {

}
