import { csv } from 'd3';

csv('data.csv').then(data => { 
  data.forEach(d => {
    d.happinessVery = +d.happinessVery
    d.happinessQuite = +d.happinessQuite
    d.artInactive = +d.artInactive
    d.artActive = +d.artActive
    d.environmentInactive = +d.environmentInactive
    d.environmentActive = +d.environmentActive
    d.unionInactive = +d.unionInactive
    d.unionActive = +d.unionActive
    d.politicalInactive = +d.politicalInactive
    d.politicalActive = +d.politicalActive
    d.professionalInactive = +d.professionalInactive
    d.professionalActive = +d.professionalActive
    d.religiousInactive = +d.religiousInactive
    d.religiousActive = +d.religiousActive
    d.sportInactive = +d.sportInactive
    d.sportActive = +d.sportActive
    d.otherInactive = +d.otherInactive
    d.otherActive = +d.otherActive;
  });
  console.log(data);
});
