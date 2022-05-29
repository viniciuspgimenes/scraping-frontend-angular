import { Component, Input, OnInit } from '@angular/core';
import { CryptoResponse } from "../../../core/apis/crypto/models";
import { CryptoService } from "../../../core/apis/crypto/crypto.service";

@Component({
  selector: 'app-crypto-tab',
  templateUrl: './crypto-tab.component.html',
  styleUrls: ['./crypto-tab.component.scss']
})
export class CryptoTabComponent implements OnInit {
  @Input() crypto: CryptoResponse = {} as CryptoResponse;
  cryptoCurrentValue: number = 0;

  constructor(private cryptoService: CryptoService) {
  }

  ngOnInit(): void {
    this.watchCryptoValueChanges();
  }

  watchCryptoValueChanges() {
    this.cryptoService.updatedCryptoValues.subscribe(updatedValues => {
      const currentCrypto = updatedValues.find(it => it.id === this.crypto.id);
      if (!currentCrypto) {
        return;
      }
      this.cryptoCurrentValue = currentCrypto.value;
    });
  }
}
