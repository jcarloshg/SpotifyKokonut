import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchItemsService } from 'src/app/business_domain_services/search_content/search-items.service';
import { Albums } from 'src/business_domain/search_content/domain/repository.searchItems';

@Component({
    selector: 'app-list-albums-card',
    templateUrl: './list-albums-card.component.html',
    styleUrls: ['./list-albums-card.component.css']
})
export class ListAlbumsCardComponent {

    public albums: Albums | null = null;
    private albums$: Subscription;

    constructor(private searchItemsService: SearchItemsService) {
        this.albums$ = this.searchItemsService
            .observableAlbums
            .subscribe(albums => this.albums = albums);
    }

    ngOnInit(): void {
        this.albums = this.searchItemsService.albums;
    }

    ngOnDestroy(): void {
        this.albums$.unsubscribe();
    }

}
