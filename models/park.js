const Park = function(name, ticketPrice){
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}

Park.prototype.add = function(trex1){
    this.dinosaurs.push(trex1)

}

Park.prototype.remove = function(velociraptor1){
    this.dinosaurs.pop(velociraptor1)
}

// Park.prototype.findMostAttractiveDinosaur = function(){
//     let mostpopular;
//   for (i=0; i<this.dinosaurs.length; i++) {
//     if(this.dinosaurs[i].guestsAttractedPerDay < this.dinosaurs[i+1].guestsAttractedPerDay){
//       mostpopular = this.dinosaurs[i+1]
//     }
//   }
//   return mostpopular;
// };

Park.prototype.findBySpecies = function (species) {
    let result = this.dinosaurs.filter(dinosaur => dinosaur.species == species);
    return result;
  };


Park.prototype.calculateAverageVisitorsPerDay = function(){
    let totalVisitors = 0
    for(dinosaur of this.dinosaurs){
        totalVisitors += dinosaur.guestsAttractedPerDay
    
    }
    return totalVisitors

};

Park.prototype.calculateAverageVisitorsPerYear = function(){
    return (365 * this.calculateAverageVisitorsPerDay())
}

Park.prototype.calculateAverageYearlyRevenue = function(){
    Revenue = this.calculateAverageVisitorsPerYear() * this.ticketPrice
    return Revenue
}





module.exports = Park