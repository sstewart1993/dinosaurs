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
//     let mostPopular
//     for(i=0; i<this.dinosaurs.guestsAttractedPerDay; i++){
//        if (this.dinosaurs.guestsAttractedPerDay[i]< this.dinosaurs.guestsAttractedPerDay[i++]){
//         return mostPopular
//        }
// }
// }


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



module.exports = Park;