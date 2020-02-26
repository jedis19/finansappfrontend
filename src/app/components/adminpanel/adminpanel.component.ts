import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.less']
})
export class AdminpanelComponent implements OnInit {
  myArray = [];
  myFirstTabArray = [];
  mySecondTabArray = [];
  myThirdTabArray = [];
  firstTabClicked: boolean = true;
  secondTabClicked: boolean = false;
  thirdTabClicked: boolean = false;
  loadedCount = 0;

  dataNamesLine1 = ['ALTIN', 'ONS', 'USDTRY', 'EURTRY', 'EURUSD', 'USDKG', 'EURKG', 'GUMUSTRY']
  realNamesLine1 = ['Has Altın', 'ONS', 'USD/TL', 'EUR/TL', 'Euro/USD', 'USD/Kg', 'Euro/Kg', 'Gümüş']
  ratesLine1 = []
  dataNamesLine2 = ['USDTRY', 'EURTRY', 'EURUSD', 'USDKG', 'EURKG', 'GBPTRY', 'CHFTRY', 'JPYTRY', 'CADTRY', 'AUDTRY', 'NOKTRY', 'DKKTRY', 'SEKTRY', 'SARTRY']
  realNamesLine2 = ['USD/TL', 'EUR/TL', 'Euro/USD', 'USD/Kg', 'Euro/Kg', 'GBP/TL', 'CHF/TL', 'YEN/TL', 'CAD/TL', 'AUD/TL', 'NOK/TL', 'DKK/TL', 'SEK/TL', 'SAR/TL']
  ratesLine2 = []
  dataNamesLine3 = ['CEYREK_YENI', 'CEYREK_ESKI', 'YARIM_YENI', 'YARIM_ESKI', 'TEK_YENI', 'TEK_ESKI', 'ATA_YENI', 'ATA_ESKI', 'ATA5_ESKI', 'ATA5_YENI', 'AYAR14', 'AYAR22', 'GREMESE_YENI', 'GREMESE_ESKI']
  realNamesLine3 = ['Çeyrek(Yeni)', 'Çeyrek(Eski)', 'Yarım(Yeni)', 'Yarım(Eski)', 'Tam(Yeni)', 'Tam(Eski)', 'Ata(Yeni)', 'Ata(Eski)', 'Ata5(Yeni)', 'Ata5(Eski)', '14 Ayar', '22 Ayar', 'Gremse(Yeni)', 'Gremse(Eski)']
  ratesLine3 = []



  constructor(private dataService: DataService, private loginService: LoginService, private router: Router) {

    this.loginService.getStatus();

    this.dataService.getRatesLineOne().subscribe(data => {
      for (let i = 0; i < this.dataNamesLine1.length; i++) {
        this.ratesLine1.push(data[i]["rate"]);
      }
      this.loadedCount++;
      this.loadData();
    })

    this.dataService.getRatesLineTwo().subscribe(data => {
      for (let i = 0; i < this.dataNamesLine2.length; i++) {
        this.ratesLine2.push(data[i]["rate"]);
      }
      this.loadedCount++;
      this.loadData();
    })

    this.dataService.getRatesLineThree().subscribe(data => {
      for (let i = 0; i < this.dataNamesLine3.length; i++) {
        this.ratesLine3.push(data[i]["rate"]);
      }
      this.loadedCount++;
      this.loadData();
    })


  }

  loadData = () => {
    if (this.loadedCount !== 3)
      return;
    this.dataService.getDatas().subscribe(data => {
      for (let i = 0; i < this.dataNamesLine1.length; i++) {
        this.setAllDataLine1(this.dataNamesLine1[i], this.realNamesLine1[i], data, this.ratesLine1[i]);
      }
      for (let i = 0; i < this.dataNamesLine2.length; i++) {
        this.setAllDataLine2(this.dataNamesLine2[i], this.realNamesLine2[i], data, this.ratesLine2[i]);
      }
      for (let i = 0; i < this.dataNamesLine3.length; i++) {
        this.setAllDataLine3(this.dataNamesLine3[i], this.realNamesLine3[i], data, this.ratesLine3[i]);
      }
    })
  }

  ngOnInit(): void {
  }

setAllDataLine1(dataNames, realNames, data, ratesLine) {
  let value = data['' + dataNames]
  let alis = parseFloat(data['' + dataNames]['alis']);
  let satis = parseFloat(data['' + dataNames]['satis'])
  let currentDeger = parseFloat(ratesLine)
  this.myFirstTabArray.push({ name: realNames, values: value, rate: ratesLine, alis: alis - currentDeger, satis: satis + currentDeger, currentRate: 0 })
}

setAllDataLine2(dataNames, realNames, data, ratesLine) {
  let value = data['' + dataNames]
  let alis = parseFloat(data['' + dataNames]['alis']);
  let satis = parseFloat(data['' + dataNames]['satis'])
  let currentDeger = parseFloat(ratesLine)
  this.mySecondTabArray.push({ name: realNames, values: value, rate: ratesLine, alis: alis - currentDeger, satis: satis + currentDeger, currentRate: 0 })
}

setAllDataLine3(dataNames, realNames, data, ratesLine) {
  let value = data['' + dataNames]
  let alis = parseFloat(data['' + dataNames]['alis']);
  let satis = parseFloat(data['' + dataNames]['satis'])
  let currentDeger = parseFloat(ratesLine)
  this.myThirdTabArray.push({ name: realNames, values: value, rate: ratesLine, alis: alis - currentDeger, satis: satis + currentDeger, currentRate: 0 })
}

isFirstTabClicked() {
  this.firstTabClicked = true;
  this.secondTabClicked = false;
  this.thirdTabClicked = false;
}

isSecondTabClicked() {
  this.firstTabClicked = false;
  this.secondTabClicked = true;
  this.thirdTabClicked = false;
}

isThirdTabClicked() {
  this.firstTabClicked = false;
  this.secondTabClicked = false;
  this.thirdTabClicked = true;
}

onSelect(name, rate) {
  this.dataService.sendRatesLineOne(name, rate).subscribe(data => {
    this.router.navigate([""])
  })
}

onSelectTwo(name, rate) {
  this.dataService.sendRatesLineTwo(name, rate).subscribe(data => {
    this.router.navigate([""])
  })
}

onSelectThree(name, rate) {
  this.dataService.sendRatesLineThree(name, rate).subscribe(data => {
    this.router.navigate([""]);
  })
}

}
