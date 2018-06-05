const proxyquire = require ("proxyquire");
const sinon = require ("sinon");
const chai = require ("chai");
const should = chai.should();
const Reservation = require ("../../../../lib/schema/reservation");

describe("Reservation Schema", function(){

    const debugStub = function (){
        return sinon.stubObject();
    }
    let reservations;

    context("Date and Time Combination", function (){

        it ("should return a ISO 8601 date and time with valid input", function(){
            const date = "2017/06/10";
            const time = "06:02 AM";

            Reservation.combineDateTime (date, time).should.equal("2017-06-10T06:02:00.000Z");
        });

        it ("should return null on a bad date and time", function(){
            const date = "23342werw";
            const time = "06:02 AM";

            should.not.exist(Reservation.combineDateTime(date, time));
        });
    });
});