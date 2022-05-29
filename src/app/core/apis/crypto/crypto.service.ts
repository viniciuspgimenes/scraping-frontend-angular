import { Injectable } from '@angular/core';
import { ApiService } from "../api.service";
import { environment } from "../../../../environments/environment";
import { firstValueFrom, map } from "rxjs";
import { CryptoResponse } from "./models";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private apiService: ApiService) {
  }

  getAllCryptos(): Promise<CryptoResponse[]> {
    return firstValueFrom<CryptoResponse[]>(
      this.apiService.get(`${environment.apiUrl}/api/cryptos`)
        .pipe(map(response => response.body as CryptoResponse[])));
  }
}
