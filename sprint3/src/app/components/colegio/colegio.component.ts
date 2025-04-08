import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-colegio',
  standalone: true,
  imports: [],
  templateUrl: './colegio.component.html',
  styleUrl: './colegio.component.css'
})
export class ColegioComponent implements OnInit {

  MyVariable = 'myVariable';

  constructor() {
  }

  ngOnInit(): void {}

}
