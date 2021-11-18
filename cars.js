const Car = function (make,model,color,image,registrationNumber,price)  {
    this.make=make;
    this.model=model;
    this.color=color;
    this.image=image;
    this.registrationNumber=registrationNumber;
    this.price=price;
};
this.editPrice = function (newPrice) {
    this.price=newPrice; 
}
   
this.showAll=function(){
console.log("The make "+`${this.make}`+"the model"+`${this.model}`
+"The color"+`${this.color}`+"The image"+`${this.image}`+"The registrationNumber"`${this.registrationNumber}`+
"The price"+`${price}`);

}
CarBMW=new Car(2020,2021,'black','v',12345,3455)
