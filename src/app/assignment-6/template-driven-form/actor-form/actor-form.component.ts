import { Component } from '@angular/core';
import { Actor } from '../actor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actor-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.css'
})
export class ActorFormComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  newActor() {
    this.model = new Actor(42, '', '');
  }
}
