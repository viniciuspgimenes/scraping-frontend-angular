import { Component, OnInit } from '@angular/core';
import { CryptoService } from "../core/apis/crypto/crypto.service";
import { CryptoResponse } from "../core/apis/crypto/models";

@Component({
  selector: 'app-crypto-page',
  templateUrl: './crypto-page.component.html',
  styleUrls: ['./crypto-page.component.scss']
})
export class CryptoPageComponent implements OnInit {
  public cryptos: CryptoResponse[] = [];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.loadCryptos();
  }

  private loadCryptos() {
    this.cryptoService.getAllCryptos()
      .then(cryptos => this.cryptos = cryptos)
  }
}
