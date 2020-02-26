import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IoService } from 'src/app/services/io.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.less']
})
export class MainpageComponent implements OnInit {
  myArray = [];
  myFirstTabArray=[];
  mySecondTabArray=[];
  myThirdTabArray=[];
  firstTabClicked:boolean=true;
  secondTabClicked:boolean=false;
  thirdTabClicked:boolean=false;
  loadedCount = 0;
  
  dataNamesLine1 = ['ALTIN', 'ONS', 'USDTRY', 'EURTRY', 'EURUSD', 'USDKG', 'EURKG', 'GUMUSTRY']
  realNamesLine1 = ['Has Altın', 'ONS', 'USD/TL', 'EUR/TL', 'Euro/USD', 'USD/Kg', 'Euro/Kg', 'Gümüş']
  ratesLine1=[]
  dataNamesLine2 = ['USDTRY', 'EURTRY', 'EURUSD', 'USDKG', 'EURKG', 'GBPTRY', 'CHFTRY', 'JPYTRY', 'CADTRY', 'AUDTRY', 'NOKTRY', 'DKKTRY', 'SEKTRY', 'SARTRY']
  realNamesLine2 = ['USD/TL', 'EUR/TL', 'Euro/USD', 'USD/Kg', 'Euro/Kg', 'GBP/TL', 'CHF/TL', 'YEN/TL', 'CAD/TL', 'AUD/TL', 'NOK/TL', 'DKK/TL', 'SEK/TL', 'SAR/TL']
  ratesLine2=[]
  dataNamesLine3 = ['CEYREK_YENI', 'CEYREK_ESKI', 'YARIM_YENI', 'YARIM_ESKI', 'TEK_YENI', 'TEK_ESKI', 'ATA_YENI', 'ATA_ESKI', 'ATA5_ESKI', 'ATA5_YENI', 'AYAR14', 'AYAR22', 'GREMESE_YENI', 'GREMESE_ESKI']
  realNamesLine3 = ['Çeyrek(Yeni)', 'Çeyrek(Eski)', 'Yarım(Yeni)', 'Yarım(Eski)', 'Tam(Yeni)', 'Tam(Eski)', 'Ata(Yeni)', 'Ata(Eski)', 'Ata5(Yeni)', 'Ata5(Eski)', '14 Ayar', '22 Ayar', 'Gremse(Yeni)', 'Gremse(Eski)']
  ratesLine3=[]
  constructor(private dataService:DataService,private ioService:IoService) { 
 
     
    this.ioService.getDatas().subscribe(data => {
      for (let i = 0; i < this.dataNamesLine1.length; i++) {
        this.changeAllDataLine1(this.dataNamesLine1[i], this.realNamesLine1[i],data,this.ratesLine1[i]);
      }
      for (let i = 0; i < this.dataNamesLine2.length; i++) {
        this.changeAllDataLine2(this.dataNamesLine2[i], this.realNamesLine2[i],data,this.ratesLine2[i]);
      }
      for (let i = 0; i < this.dataNamesLine3.length; i++) {
        this.changeAllDataLine3(this.dataNamesLine3[i], this.realNamesLine3[i],data,this.ratesLine3[i]);
      }
    })

    this.dataService.getRatesLineOne().subscribe(data => {
      for(let i=0;i<this.dataNamesLine1.length;i++){
        this.ratesLine1.push(data[i]["rate"]);
      }
      this.loadedCount++;
      this.loadData();
    })

    this.dataService.getRatesLineTwo().subscribe(data => {
      for(let i=0;i<this.dataNamesLine2.length;i++){
        this.ratesLine2.push(data[i]["rate"]);
      }
      this.loadedCount++;
      this.loadData();
    })

    this.dataService.getRatesLineThree().subscribe(data => {
      for(let i=0;i<this.dataNamesLine3.length;i++){
        this.ratesLine3.push(data[i]["rate"]);
      }
      this.loadedCount++;
      this.loadData();
    })

    
  }

  loadData = () => {
    if(this.loadedCount !==3)
    return;
    this.dataService.getDatas().subscribe(data => {
      for (let i = 0; i < this.dataNamesLine1.length; i++) {
        this.setAllDataLine1(this.dataNamesLine1[i], this.realNamesLine1[i],data,this.ratesLine1[i]);
      }
      for (let i = 0; i < this.dataNamesLine2.length; i++) {
       this.setAllDataLine2(this.dataNamesLine2[i], this.realNamesLine2[i],data,this.ratesLine2[i]);
      }
      for (let i = 0; i < this.dataNamesLine3.length; i++) {
        this.setAllDataLine3(this.dataNamesLine3[i], this.realNamesLine3[i],data,this.ratesLine3[i]);
      }
    })

  }

  ngOnInit(): void {
  }
  //sayfa ilk açıldığında verileri çekme
  setAllDataLine1(dataNames, realNames,data,ratesLine) {
    let value = data['' + dataNames]
    let alis = parseFloat(data[''+dataNames]['alis']);
    let satis = parseFloat(data[''+dataNames]['satis'])
    var currentDeger = parseFloat(ratesLine);
    let code = data[''+dataNames]['code'];
    this.myFirstTabArray.push({ name: realNames, values: value,alis:alis-currentDeger,satis:satis+currentDeger,code:code,alisunchanged:alis,satisunchanged:satis,color:"white"})
  }

 setAllDataLine2(dataNames, realNames,data,ratesLine) {
    let value = data['' + dataNames]
    let alis = parseFloat(data[''+dataNames]['alis']);
    let satis = parseFloat(data[''+dataNames]['satis'])
    var currentDeger = parseFloat(ratesLine);
    let code = data[''+dataNames]['code'];
    this.mySecondTabArray.push({ name: realNames, values: value,satis:satis+currentDeger,alis:alis-currentDeger,code:code,alisunchanged:alis,satisunchanged:satis,color:"white"})
  }

  setAllDataLine3(dataNames, realNames,data,ratesLine) {
    let value = data['' + dataNames]
    let alis = parseFloat(data[''+dataNames]['alis']);
    let satis = parseFloat(data[''+dataNames]['satis'])
    var currentDeger = parseFloat(ratesLine);
    let code = data[''+dataNames]['code'];
    this.myThirdTabArray.push({ name: realNames, values: value,alis:alis-currentDeger,satis:satis+currentDeger,code:code,alisunchanged:alis,satisunchanged:satis,color:"white" })
  }

  //değişen verileri sayfada otomatik güncelleme
  changeAllDataLine1(dataNames,realNames,data,ratesLine){
    let value = data['' + dataNames]
    let alis = parseFloat(data[''+dataNames]['alis']);
    let satis = parseFloat(data[''+dataNames]['satis'])
    var currentDeger = parseFloat(ratesLine);
    this.myFirstTabArray.forEach((element,index) => {
      if(element.code==data[""+dataNames].code){
      if(element.satisunchanged>satis){
            this.myFirstTabArray[index].color="red"
      }if(element.satisunchanged==satis){
          this.myFirstTabArray[index].color="white"
      }if(element.satisunchanged<satis){
            this.myFirstTabArray[index].color="green"
        }
        this.myFirstTabArray[index].values = value
        this.myFirstTabArray[index].alis = alis-currentDeger
        this.myFirstTabArray[index].satis = satis-currentDeger
        this.myFirstTabArray[index].satisunchanged = satis
        this.myFirstTabArray[index].alisunchanged = alis
      }
    })
  }

  
  changeAllDataLine2(dataNames,realNames,data,ratesLine){
    let value = data['' + dataNames]
    let alis = parseFloat(data[''+dataNames]['alis']);
    let satis = parseFloat(data[''+dataNames]['satis'])
    var currentDeger = parseFloat(ratesLine);
    this.mySecondTabArray.forEach((element,index) => {
      if(element.code===data[""+dataNames].code){
        if(element.satisunchanged>satis){
              this.mySecondTabArray[index].color="red"
        }if(element.satisunchanged==satis){
            this.mySecondTabArray[index].color="white"
        }if(element.satisunchanged<satis){
              this.mySecondTabArray[index].color="green"
          }
        this.mySecondTabArray[index].values = value
        this.mySecondTabArray[index].alis = alis-currentDeger
        this.mySecondTabArray[index].satis = satis-currentDeger
        this.mySecondTabArray[index].satisunchanged = satis
        this.mySecondTabArray[index].alisunchanged = alis
      }
    })
  }

  
  changeAllDataLine3(dataNames,realNames,data,ratesLine){
    let value = data['' + dataNames]
    let alis = parseFloat(data[''+dataNames]['alis']);
    let satis = parseFloat(data[''+dataNames]['satis'])
    var currentDeger = parseFloat(ratesLine);
    this.myThirdTabArray.forEach((element,index) => {
      if(element.satisunchanged>satis){
            this.myThirdTabArray[index].color="red"
      }if(element.satisunchanged==satis){
          this.myThirdTabArray[index].color="white"
      }if(element.satisunchanged<satis){
            this.myThirdTabArray[index].color="green"
        }
      if(element.code===data[""+dataNames].code){
        this.myThirdTabArray[index].values = value
        this.myThirdTabArray[index].alis = alis-currentDeger
        this.myThirdTabArray[index].satis = satis-currentDeger
        this.myThirdTabArray[index].satisunchanged = satis
        this.myThirdTabArray[index].alisunchanged = alis
      }
    })
  }
  isFirstTabClicked(){
    this.firstTabClicked=true;
    this.secondTabClicked=false;
    this.thirdTabClicked=false;
  }

  isSecondTabClicked(){
    this.firstTabClicked=false;
    this.secondTabClicked=true;
    this.thirdTabClicked=false;
  }

  isThirdTabClicked(){
    this.firstTabClicked=false;
    this.secondTabClicked=false;
    this.thirdTabClicked=true;
  }

}
