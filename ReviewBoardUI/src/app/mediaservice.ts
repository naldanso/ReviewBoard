import { Injectable } from '@angular/core';
import {IMediaLayout} from '../media-layout';

@Injectable({
  providedIn: 'root'
})

export class Mediaservice {
  readonly imageUrl = 'img';

  mediaArr: IMediaLayout[] = [
    {
      id: 123,
      photo: `${this.imageUrl}/photographer-at-sunset-silhouette.jpg`,
      date: '10/14/2025'
    },
    {
      id: 2,
      photo: `${this.imageUrl}/1-1233593493r6pB.jpg`,
      date: '11/6/2025'
    },
    {
      id: 3,
      photo: `${this.imageUrl}/1-1275673689tHg9.jpg`,
      date: '11/6/2025'
    },
    {
      id: 4,
      photo: `${this.imageUrl}/33-1219682381DgyN.jpg`,
      date: '11/6/2025'
    },
    {
      id: 5,
      photo: `${this.imageUrl}/background-with-flower-and-butterfl-1326054113zvO.jpg`,
      date: '11/6/2025'
    },
    {
      id: 6,
      photo: `${this.imageUrl}/night-landscape-15010066769pV.jpg`,
      date: '11/6/2025'
    }
  ];

  getAllMedia(): IMediaLayout[] {
    return this.mediaArr;
  }

  getMediaById(id: number): IMediaLayout | undefined {
    return this.mediaArr.find((media) => media.id == id);
  }
}
