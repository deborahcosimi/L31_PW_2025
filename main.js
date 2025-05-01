window.addEventListener('DOMContentLoaded', function() {
  const kpiData = {
    "2016": {
      co2: 98000, intensita_co2: "0.30", renewable: "45 %", potenza_renew: "36", formazione: 42,
      infortuni: 0.82, donne: "22 %", turnover: "6 %", cda_donne: "36 %", cda_indipendenti: "64 %", etica: 2, investimenti: 4200
    },
	"2017": {
      co2: 82000, intensita_co2: "0.25", renewable: "53 %", potenza_renew: "46", formazione: 48,
      infortuni: 0.77, donne: "26 %", turnover: "5 %", cda_donne: "40 %", cda_indipendenti: "67 %", etica: 1, investimenti: 4900
    },
	"2018": {
      co2: 82000, intensita_co2: "0.25", renewable: "53 %", potenza_renew: "46", formazione: 48,
      infortuni: 0.77, donne: "26 %", turnover: "5 %", cda_donne: "40 %", cda_indipendenti: "67 %", etica: 1, investimenti: 4900
    },
    "2019": {
      co2: 82000, intensita_co2: "0.25", renewable: "53 %", potenza_renew: "46", formazione: 48,
      infortuni: 0.77, donne: "26 %", turnover: "5 %", cda_donne: "40 %", cda_indipendenti: "67 %", etica: 1, investimenti: 4900
    },
    "2020": {
      co2: 63000, intensita_co2: "0.22", renewable: "60 %", potenza_renew: "49", formazione: 52,
      infortuni: 0.69, donne: "28 %", turnover: "4.5 %", cda_donne: "45 %", cda_indipendenti: "69 %", etica: 1, investimenti: 5000
    },
	"2021": {
      co2: 52000, intensita_co2: "0.18", renewable: "64 %", potenza_renew: "60", formazione: 57,
      infortuni: 0.51, donne: "31 %", turnover: "3.9 %", cda_donne: "48 %", cda_indipendenti: "71 %", etica: 0, investimenti: 5600
    },
	"2022": {
      co2: 52000, intensita_co2: "0.18", renewable: "64 %", potenza_renew: "60", formazione: 57,
      infortuni: 0.51, donne: "31 %", turnover: "3.9 %", cda_donne: "48 %", cda_indipendenti: "71 %", etica: 0, investimenti: 5600
    },
    "2023": {
      co2: 52000, intensita_co2: "0.18", renewable: "64 %", potenza_renew: "60", formazione: 57,
      infortuni: 0.51, donne: "31 %", turnover: "3.9 %", cda_donne: "48 %", cda_indipendenti: "71 %", etica: 0, investimenti: 5600
    },
    "2024": {
      co2: 55000, intensita_co2: "0.19", renewable: "68 %", potenza_renew: "66", formazione: 77,
      infortuni: 0.50, donne: "35 %", turnover: "3.9 %", cda_donne: "48 %", cda_indipendenti: "71 %", etica: 0, investimenti: 5800
    }
  };

  const downloadDocs = {
	"2024": [
      {
        titolo: "Rapporto sulla promozione delle politiche climatiche 2024",
        descrizione: "Risultati globali, climate strategy e innovazione.",
        url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2024/climate-policy-advocacy-report-2024.pdf"
      }
    ],
    "2023": [
      {
        titolo: "Bilancio di Sostenibilità 2023",
        descrizione: "Risultati globali, climate strategy e innovazione.",
        url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2023/sustainability-report_2023.pdf"
      }
    ],
	"2022": [
      {
        titolo: "Bilancio di Sostenibilità 2022",
        descrizione: "Dichiarazione consolidata di carattere non finanziario",
        url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2022/sustainability-report_2022.pdf"
      }
    ],
	"2021": [
      {
        titolo: "Bilancio di Sostenibilità 2021",
        descrizione: "Dichiarazione consolidata di carattere non finanziario",
        url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2021/sustainability-report_2021.pdf"
      }
    ],
    "2020": [
      {
        titolo: "Bilancio di Sostenibilità 2020",
        descrizione: "Dichiarazione consolidata di carattere non finanziario",
        url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2020/sustainability-report_2020.pdf"
      }
    ],
    "2019": [
      {
        titolo: "Bilancio di Sostenibilità 2019",
        descrizione: "Dichiarazione consolidata di carattere non finanziario",
        url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2019/sustainability-report_2019.pdf"
      }
    ],
    "2018": [
      {
        titolo: "Bilancio di Sostenibilità 2018",
        descrizione: "Dichiarazione consolidata di carattere non finanziario",
        url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2019/sustainability-report_2019.pdf"
      }
    ],
    "2017": [
      {
        titolo: "Bilancio di Sostenibilità 2017",
        descrizione: "Dichiarazione consolidata di carattere non finanziario",
        url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2019/sustainability-report_2019.pdf"
      }
    ],
    "2016": [
      {
        titolo: "Bilancio di Sostenibilità 2016",
        descrizione: "Dichiarazione consolidata di carattere non finanziario",
        url: "https://www.enel.com/content/dam/enel-com/documenti/investitori/sostenibilita/2019/sustainability-report_2019.pdf"
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
