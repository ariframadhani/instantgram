import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import axios from 'axios';
import { SERVER_API, getAuth, convertToBase64PNG } from '../utils';
import { ProfileOptionComponent } from '../popover/profile-option/profile-option.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  username: string = getAuth();
  profile: any;
  gallery: Array<any>;
  encode: Array<object>;
  loading: boolean;
  hideoption: boolean;

  nopost: boolean = false;

  constructor(public popoverController: PopoverController,
    private actvRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router) { }

  async ngOnInit() {
    if (this.actvRoute.snapshot.data['data'])
      this.username = this.actvRoute.snapshot.data['data'];
    else
      this.username = getAuth();
    
    this.profileDetail();
  }
  
  private async profileDetail() {
    const response = await axios.get(`${SERVER_API}/user/profile.php?username=${this.username}`);
    const { profile, gallery, encode } = response.data;
    
    this.profile = profile;
    this.gallery = gallery;
    this.encode = convertToBase64PNG(encode, gallery);

    this.hideoption = this.username != getAuth() ? true : false;

    if (this.encode.length <= 0) this.nopost = true;

    this.loading = false;
  }

  async showProfileOption(ev: any) {
    const popover = await this.popoverController.create({
      component: ProfileOptionComponent,
      event: ev,
      translucent: true
    });

    return await popover.present();
  }

  async detailPost(selectedId: any) {
    const passData = {
      id: selectedId,
      username: this.profile.username,
    }

    this.dataService.setData(
      selectedId, // key
      passData // data
    );

    this.router.navigateByUrl(`/tabs/post/${selectedId}`);
  }

}
