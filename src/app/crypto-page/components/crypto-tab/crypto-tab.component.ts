import { Component, Input, OnInit } from '@angular/core';
import { CryptoResponse } from "../../../core/apis/crypto/models";

@Component({
  selector: 'app-crypto-tab',
  templateUrl: './crypto-tab.component.html',
  styleUrls: ['./crypto-tab.component.scss']
})
export class CryptoTabComponent implements OnInit {
  @Input() crypto: CryptoResponse | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
