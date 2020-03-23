import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public userId: number;
  public cartList: any[];
  public wishList: any[];
  public request = {
    limit: 15,
    offset: 0,
    sortingDirection: 'desc',
    sortingField: 'createdDate'
  }; 

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.url.subscribe(
      param => {
        this.userId = +this.route.snapshot.params.id;
        console.log(this.userId);

        let url = 'api/getAllCartAndWishlist';
        this.userService.getAllCartAndWishlist(url, this.request, {userId: this.userId}).subscribe(
          data => {
            this.wishList = data.data.wishList;
            console.log(this.wishList);
            this.cartList = data.data.cartList;
            console.log(this.cartList);
          }, error => {
            console.log(error);
          }
        )
      }
    )
  }

}
