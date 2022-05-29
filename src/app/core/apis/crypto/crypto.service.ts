import { Injectable } from '@angular/core';
import { ApiService } from "../api.service";
import { environment } from "../../../../environments/environment";
import { firstValueFrom, map } from "rxjs";
import { CryptoResponse, CryptoWithValueResponse } from "./models";
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  updatedCryptoValues = this.socket.fromEvent<CryptoWithValueResponse[]>('cryptoValueRefresh');

  constructor(private apiService: ApiService, private socket: Socket) {
  }

  getAllCryptos(): Promise<CryptoResponse[]> {
    return firstValueFrom<CryptoResponse[]>(
      this.apiService.get(`${environment.apiUrl}/api/cryptos`)
        .pipe(map(response => response.body as CryptoResponse[])));
  }
}
