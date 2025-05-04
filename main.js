/*
Questo blocco di codice viene eseguito automaticamente quando il contenuto HTML della pagina è stato completamente caricato, 
grazie all’evento DOMContentLoaded. 
Al suo interno vengono inizializzati due oggetti fondamentali per il funzionamento della dashboard:

kpiData: è un oggetto che contiene i valori dei principali indicatori di sostenibilità (KPI ESG) per ciascun anno. 
Ogni anno (es. 2020, 2021...) è associato a un sotto-oggetto che raccoglie i dati relativi a indicatori ambientali, 
sociali e di governance. Questi dati vengono visualizzati dinamicamente nella dashboard al variare dell’anno selezionato.

downloadDocs: è un oggetto che mappa ogni anno a un array di documenti ufficiali pubblicati dall’azienda 
(es. bilancio di sostenibilità, inventario GHG, report di advocacy). 
Ogni documento è descritto tramite titolo, descrizione e URL. 
Questo consente di popolare dinamicamente i link per il download nella sezione dedicata, mantenendo coerenza temporale con i KPI.

Insieme, questi due oggetti costituiscono la base dati dell’intero progetto e vengono gestiti tramite 
le funzioni updateDashboard() e updateDownloadSection(), che si attivano al cambio dello slider degli anni. 
L’obiettivo è garantire un’interfaccia interattiva, coerente e trasparente per la visualizzazione e consultazione dei dati ESG.
*/

window.addEventListener('DOMContentLoaded', function() {
 const kpiData = {
  "2019": {
    co2: "69980 ktCO₂eq",
    intensita_co2: "0.20 kgCO₂/kWh",
    renewable: "60 %",
    potenza_renew: "58 GW",
    formazione: "39 ore/dipendente",
    infortuni: "0.55 LTIFR",
    donne: "30 %",
    turnover: "3.7 %",
    cda_donne: "42 %",
    cda_indipendenti: "68 %",
    etica: "1",
    investimenti: "5300 milioni €"
  },
  "2020": {
    co2: "51600 ktCO₂eq",
    intensita_co2: "0.19 kgCO₂/kWh",
    renewable: "62 %",
    potenza_renew: "59 GW",
    formazione: "40.9 ore/dipendente",
    infortuni: "0.53 LTIFR",
    donne: "30.5 %",
    turnover: "3.8 %",
    cda_donne: "43 %",
    cda_indipendenti: "70 %",
    etica: "1",
    investimenti: "5400 milioni €"
  },
  "2021": {
    co2: "52000 ktCO₂eq",
    intensita_co2: "0.18 kgCO₂/kWh",
    renewable: "64 %",
    potenza_renew: "60 GW",
    formazione: "57 ore/dipendente",
    infortuni: "0.51 LTIFR",
    donne: "31 %",
    turnover: "3.9 %",
    cda_donne: "48 %",
    cda_indipendenti: "71 %",
    etica: "0",
    investimenti: "5600 milioni €"
  },
  "2022": {
    co2: "52100 ktCO₂eq",
    intensita_co2: "0.18 kgCO₂/kWh",
    renewable: "58.7 %",
    potenza_renew: "60 GW",
    formazione: "47.4 ore/dipendente",
    infortuni: "0.46 LTIFR",
    donne: "31 %",
    turnover: "3.9 %",
    cda_donne: "43 %",
    cda_indipendenti: "72 %",
    etica: "0",
    investimenti: "5600 milioni €"
  },
  "2023": {
    co2: "47000 ktCO₂eq",
    intensita_co2: "0.16 kgCO₂/kWh",
    renewable: "67.9 %",
    potenza_renew: "62 GW",
    formazione: "50 ore/dipendente",
    infortuni: "0.42 LTIFR",
    donne: "32 %",
    turnover: "4.1 %",
    cda_donne: "45 %",
    cda_indipendenti: "73 %",
    etica: "0",
    investimenti: "6100 milioni €"
  },
  "2024": {
    co2: "46000 ktCO₂eq",
    intensita_co2: "0.15 kgCO₂/kWh",
    renewable: "70.1 %",
    potenza_renew: "65 GW",
    formazione: "52 ore/dipendente",
    infortuni: "0.39 LTIFR",
    donne: "33 %",
    turnover: "4.3 %",
    cda_donne: "46 %",
    cda_indipendenti: "74 %",
    etica: "0",
    investimenti: "6200 milioni €"
  }
};


  const downloadDocs = {
	"2024": [
      {
        titolo: "Report emissioni",
        descrizione: "",
        url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2024/ghg-inventory-2024.pdf"
      },{
        titolo: "Climate Policy & Advocacy",
        descrizione: "",
        url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2024/climate-policy-advocacy-report-2024.pdf"
      },{
        titolo: "Rapporto sulla promozione delle politiche climatiche 2024",
        descrizione: "",
        url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2024/climate-policy-advocacy-report-2024.pdf"
      },{
        titolo: "Politica ambientale",
        descrizione: "",
        url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/politica-ambientale-gruppo-enel.pdf"
      }
    ],
	"2023": [
		{
		  titolo: "Bilancio di sostenibilità 2023",descrizione: "",
		  url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2023/bilancio-sostenibilita_2023.pdf"
		},
		{
		  titolo: "GHG Inventory 2023 – Emissioni di gas serra",descrizione: "",
		  url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2023/ghg-inventory-2023.pdf"
		},
		{
		  titolo: "Informativa semestrale sulla sostenibilità (30 giugno 2023)",descrizione: "",
		  url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2023/informativa-sostenibilita-semestrale_30giugno2023.pdf"
		},
		{
		  titolo: "Attività ecosostenibili (EU Taxonomy)",descrizione: "",
		  url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2023/attivita-ecosostenibili_2023.pdf"
		},
		{
		  titolo: "Advocacy climatica e associazioni coinvolte",descrizione: "",
		  url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2023/enel-engagement-associations-involved-climate-policy-advocacy-2023.pdf"
		},
		{
		  titolo: "Gestione dei diritti umani 2023",descrizione: "",
		  url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/diritti-umani/gestione-diritti-umani_2023.pdf"
		}
	  ],
	"2022": [
	  {
		titolo: "Executive Summary 2022",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2022/executive-summary-2022_it.pdf"
	  },
	  {
		titolo: "Bilancio di sostenibilità 2022",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2022/bilancio-sostenibilita_2022.pdf"
	  },
	  {
		titolo: "Informativa semestrale sulla sostenibilità (30 giugno 2022)",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2022/informativa-sostenibilita-semestrale_30giugno2022.pdf"
	  },
	  {
		titolo: "Attività ecosostenibili (EU Taxonomy)",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2022/attivita-ecosostenibili_2022.pdf"
	  },
	  {
		titolo: "Advocacy climatica e associazioni coinvolte",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2022/enel-engagement-associations-involved-climate-policy-advocacy.pdf"
	  },
	  {
		titolo: "Zero Emissions Ambition Report",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/zero-emissions-ambition-report.pdf"
	  }
	],
	"2021": [
	  {
		titolo: "Bilancio di sostenibilità 2021",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2021/bilancio-sostenibilita_2021.pdf"
	  },
	  {
		titolo: "Informativa semestrale sulla sostenibilità (30 giugno 2021)",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2021/informativa-sostenibilita-semestrale_30giugno2021.pdf"
	  },
	  {
		titolo: "Advocacy climatica e associazioni coinvolte",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2021/enel-engagement-associations-involved-climate-policy-advocacy.pdf"
	  },
	  {
		titolo: "Piano di sostenibilità 2022–2024",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2021/piano-sostenibilita-2022-2024.pdf"
	  },
	  {
		titolo: "Percorso verso Net-Zero",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2021/net-zero_it.pdf"
	  },
	  {
		titolo: "Transizione giusta e inclusiva",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2021/transizione-giusta-inclusiva.pdf"
	  },
	  {
		titolo: "Approccio ai diritti umani",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2021/approccio-diritti-umani.pdf"
	  },
	  {
		titolo: "Green Bond Report 2021",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2021/green-bond-report-2021_it.pdf"
	  },
	  {
		titolo: "Attività ecosostenibili (EU Taxonomy)",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2021/attivita-ecosostenibili.pdf"
	  },
	  {
		titolo: "Analisi di materialità 2021",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2021/analisi-materialita.pdf"
	  }
	],
   "2020": [
	  {
		titolo: "Bilancio di sostenibilità 2020",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2020/bilancio-sostenibilita_2020.pdf"
	  },
	  {
		titolo: "Tax Transparency Report 2020",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2020/tax-transparency-report-2020_it.pdf"
	  },
	  {
		titolo: "Net Zero Ambition 2020",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2020/net-zero-ambition-2020_it.pdf"
	  },
	  {
		titolo: "Economia circolare 2020",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2020/economia-circolare-2020_it.pdf"
	  },
	  {
		titolo: "Tassonomia Europea 2020",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2020/tassonomia-europea-2020_it.pdf"
	  },
	  {
		titolo: "Green Bond Report 2020",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2020/green-bond-report-2020_it.pdf"
	  },
	  {
		titolo: "Trasparenza fiscale 2020",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2020/trasparenza-fiscale-2020_it.pdf"
	  },
	  {
		titolo: "Sustainability Statement 2020",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2020/sustainability-statement-2020_it.pdf"
	  }
	],
    "2019": [
	  {
		titolo: "Bilancio di sostenibilità 2019",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2019/bilancio-sostenibilita_2019.pdf"
	  },
	  {
		titolo: "Green Bond Report 2019",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2019/green-bond-report-2019_it.pdf"
	  },
	  {
		titolo: "Impegno contro il cambiamento climatico 2019",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2019/impegno-cambiamento-climatico-2019.pdf"
	  },
	  {
		titolo: "At a Glance 2019",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2019/at-a-glance_it.pdf"
	  },
	  {
		titolo: "Total Tax Contribution 2019",
		descrizione: "", url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2019/total-tax-contribution-2019_it.pdf"
	  }
	]
  };

  const slider = document.getElementById('year-slider');
  const kpiFields = [
    "co2", "intensita_co2", "renewable", "potenza_renew", "formazione", "infortuni", "donne",
    "turnover", "cda_donne", "cda_indipendenti", "etica", "investimenti"
  ];

  updateDashboard(slider.value);

  slider.addEventListener('input', function() {
    updateDashboard(this.value);
  });


/*
La funzione `updateDashboard(year)` aggiorna dinamicamente il contenuto della dashboard in base all’anno selezionato dall’utente. 
Mostra i valori dei principali KPI ESG (ambientali, sociali e di governance) per l’anno scelto, prelevandoli dall’oggetto `kpiData`. 
Per ciascun indicatore, la funzione verifica la presenza del dato e lo inserisce nel relativo elemento HTML; 
in caso contrario, visualizza “ND” (non disponibile). Se i dati per l’anno non esistono affatto, viene mostrato un segnaposto "--" per tutti i campi. 
Inoltre, la funzione richiama anche `updateDownloadSection(year)` per aggiornare i link ai documenti di sostenibilità associati a quell’anno, 
assicurando così la sincronizzazione tra i KPI visualizzati e i file scaricabili. Questo metodo è centrale per garantire l’interattività 
e la coerenza informativa dell’intera dashboard.
*/

  function updateDashboard(year) {
    document.getElementById('selected-year').textContent = year;
    const dati = kpiData[year];
    if (dati) {
      kpiFields.forEach(kpi => {
        const el = document.getElementById(kpi);
        if (el) el.textContent = (dati[kpi] !== undefined && dati[kpi] !== null) ? dati[kpi] : "ND";
      });
    } else {
      kpiFields.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '--';
      });
    }
    updateDownloadSection(year);
  }
  
  
  /*
  La funzione updateDownloadSection(year) si occupa di aggiornare dinamicamente la sezione della pagina web dedicata al download 
  dei documenti di sostenibilità per l’anno selezionato. Utilizza l’oggetto downloadDocs, che associa a ogni anno un elenco di documenti con titolo, 
  descrizione e link al file PDF. Quando l’utente seleziona un anno tramite lo slider temporale, la funzione svuota la lista attuale 
  e la popola con i documenti corrispondenti. In assenza di file per quell’anno, viene mostrato un messaggio informativo. 
  Questa funzione è fondamentale per garantire un'esperienza d’uso interattiva, ordinata e coerente con l’obiettivo del progetto: 
  rendere fruibili e consultabili in modo semplice i contenuti ESG pubblicati dall’azienda.  
  */

  function updateDownloadSection(year) {
    const downloadList = document.getElementById('download-list');
    downloadList.innerHTML = '';
    const docs = downloadDocs[year];
    if (docs && docs.length > 0) {
      docs.forEach(doc => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${doc.titolo}</strong> – <span>${doc.descrizione}</span>
          <a href="${doc.url}" target="_blank" class="download-btn">Scarica PDF</a>`;
        downloadList.appendChild(li);
      });
    } else {
      downloadList.innerHTML = '<li>Nessun report disponibile per questo anno.</li>';
    }
  }
});
