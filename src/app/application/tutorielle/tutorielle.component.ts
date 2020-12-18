import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tutorielle',
  templateUrl: './tutorielle.component.html',
  styleUrls: ['./tutorielle.component.css']
})
export class TutorielleComponent implements OnInit {
  tutorialLinkId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((myMap: Params) => {
    this.tutorialLinkId = myMap.id;
  });
  }

}
