const Park = function (name, ticket_price, dinosaurs) {
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaurs = [];
}

Park.prototype.add_dinosaur = function (dinosaur) {
this.dinosaurs.push(dinosaur);
};

Park.prototype.remove_dinosaur = function (dinosaur) {
    const dino_index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(dino_index , 1);
};

Park.prototype.find_popular_dinosaur = function () {
    let popular_dino_index;
    let most_guests = 0;
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > most_guests) {
            most_guests = dinosaur.guestsAttractedPerDay;
            popular_dino_index = this.dinosaurs.indexOf(dinosaur)
        } // end of if statement
    } // end for loop

    return this.dinosaurs[popular_dino_index];
};

Park.prototype.find_dinosaurs_particular_species = function (species) {
    let dinosaur_list = [];
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species == species) {
            dinosaur_list.push(dinosaur);
        } // end of if statement
    } // end for loop

    return dinosaur_list;
};

Park.prototype.find_daily_visitors = function () {
    let daily_visitors = 0;
    for (let dinosaur of this.dinosaurs) {
        daily_visitors+=dinosaur.guestsAttractedPerDay;
    }// end for loop

    return daily_visitors;
};

Park.prototype.calculate_yearly_visitors = function () {
    let daily_visitors = this.find_daily_visitors();
    return daily_visitors*365;
};

Park.prototype.calculate_yearly_revenue = function () {
    let yearly_visitors = this.calculate_yearly_visitors();
    let yearly_revenue = yearly_visitors * this.ticket_price;
    return yearly_revenue;
};


Park.prototype.remove_all_particular_species = function (species) {

    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species == species) {
            this.remove_dinosaur(dinosaur);
        } // end of if statement
    } // end for loop
};

module.exports = Park;