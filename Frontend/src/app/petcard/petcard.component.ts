import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-petcard',
  templateUrl: './petcard.component.html',
  styleUrls: ['./petcard.component.css']
})
export class PetcardComponent implements OnInit {
  @Input() petInformation: any;
  constructor() { }

  ngOnInit(): void {
  }

}
