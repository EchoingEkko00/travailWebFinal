import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/modeles/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  id: number;
  user: User;
  constructor(private service: UserService, private routeur: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['Param'];
    this.service.findByID(this.id).subscribe(data => {
      this.user = data;
    }, (error) => {
      console.log(error);
    });
  }

}
