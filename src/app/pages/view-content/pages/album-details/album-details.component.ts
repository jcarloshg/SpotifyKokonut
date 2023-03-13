import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAlbumDetailsService } from 'src/app/business_domain_services/search_content/get-album-details.service';
import { Album } from 'src/business_domain/search_content/domain/repository.getAlbumDetails';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent {

  public album: Album | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private getAlbumDetailsService: GetAlbumDetailsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const albumIDToSearch = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.album = await this.getAlbumDetailsService.getAlbumDetails(albumIDToSearch)
  }
}
