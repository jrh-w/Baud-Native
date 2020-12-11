import axios from 'axios';

export function getDateLabels() {
  let labels = [];

  let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let currentDay = new Date().getDay();

  for(let days = 6; days >= 0; days--) {
    labels[days] = daysOfWeek[currentDay];
    currentDay--;
    if(currentDay < 0) currentDay += 7
  }

  return labels;

}

export function getCertificates(certificates) {

  return new Promise((resolve, reject) => {
    axios.get('https://evening-oasis-01489.herokuapp.com/certificates')
      .then((response) => {
        let CERT_DATABASE = {};
        for(let certificate of response.data){
          CERT_DATABASE[certificate.name] = {
            icon: certificate.icon,
            color: certificate.color,
            bgColor: certificate.bgColor,
            route: certificate.route
          }
        }

        certificates = certificates.split(';');
        let certificatesGroup = [];

        for(let certificate of certificates) {
          if(certificate === '') continue;
          certificate = certificate.split('-');

          certificatesGroup.push(Object.assign(CERT_DATABASE[certificate[0]], {
            name: certificate[0],
            progress: certificate[1]
          }));
        }

        resolve(certificatesGroup);

      }).catch((error) => {
        console.log(error);
      })
  });

}

export function getChartData(data, lastDays = 7) {
  let lastWeekPoints = new Array(lastDays).fill(0);

  let points = data.points.split(";").slice(Math.abs(lastDays) * -1);
  let date = data.date.split(";").slice(Math.abs(lastDays) * -1);

  let currentDate = Date.now() / 1000; // Current time in seconds
  let offset = new Date().getTimezoneOffset();

  let calculatedLocalMidnight = (parseInt(currentDate / 86400)*86400) + (offset*60)

  for(let d = 0; d < date.length; d++) {
    if(date[d] < calculatedLocalMidnight-(86400*6)) continue;

    for(let day = 6; day >= 0; day--) {

      if(date[d] >= calculatedLocalMidnight-(86400*day)
      && date[d] < calculatedLocalMidnight-(86400*(day-1))) {
        lastWeekPoints[6-day] = points[d];
      }

    }
  }

  return [
    {
      data: lastWeekPoints,
      strokeWidth: 2,
    }
  ];
}

export async function prepareUserStatsData(data, lastDays = 7) { // Preparing data from the last week // NEEDS TESTING
  let certificates = await getCertificates(data.certificates);

  return new Promise((resolve, reject) => {
    let datasets = getChartData(data, lastDays);
    let labels = getDateLabels();

    resolve({
      userStats: {
        labels: labels,
        datasets: datasets,
        createdLessons: data.createdLessons,
        userRank: data.userRank,
        userWins: data.userWins
      },
      certificates: certificates
    });
  });

}
