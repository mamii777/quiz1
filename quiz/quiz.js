const bolgeler={
    messi:{
        soru:"Messi Kaç Kırmızı Kart Yemiştir?",
        secenekler:["2","4"],
        cevap:"2"
    },
    ronaldo:{
        soru:"Ronaldo Kaç Kez Ballon D'Or Almıştır?",
        secenekler:["5","7"],
        cevap:"5"
    },
    quaresma:{
        soru:"Quaresma Kaç Sene Beşiktaş Spor Kulübünde Forma Giymiştir?",
        secenekler:["4","2"],
        cevap:"4"
    }
};


let bilgiler,soru,dogruCevap,secenekler,kullaniciCevap,alanlar,secilenBolge;

alanlar=document.getElementsByTagName("img");
[...alanlar].forEach((alan,index) => {
  alan.addEventListener("click",()=>{
    secilenBolge=alan.getAttribute("title");
    soruyuGoster(secilenBolge);
  });
});

function soruyuGoster(secilenBolge){
    bilgiler=bolgeler[secilenBolge];
    soru=bilgiler['soru'];
    secenekler=bilgiler['secenekler'];
    dogruCevap=bilgiler.cevap;
    
    
    document.getElementById("seceneklerListesi").innerHTML = "";
    document.getElementById("soruBaslik").textContent = soru;


    secenekler.forEach((secenek)=>{
      
      const yeniSecenek=document.createElement("li");
      const yeniRadio=document.createElement("input");

      yeniSecenek.innerHTML=secenek;
      yeniRadio.type="radio";
      yeniRadio.name="yeniSecenek";
      yeniRadio.value=secenek;

      yeniSecenek.appendChild(yeniRadio);
      document.getElementById("seceneklerListesi").appendChild(yeniSecenek);
      
    });   
}


function cevabiKontrolEt(){
    kullaniciCevap=document.querySelector('input[name="yeniSecenek"]:checked').value;
    let sayı=0;

    if(kullaniciCevap===dogruCevap){
      alert("Tebrikler. Doğru cevap.");
      document.getElementsByTagName("img").style.background="green";
    }
    else{
      alert("Yanlış cevap!!!");
      document.getElementById("kutular")
    }
  }
