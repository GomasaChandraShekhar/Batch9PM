
export class Student {

    // this - 
    /*
    1. to access current class constructor
    2. to acces current class methods/functions
    3. to access current class variables
    4. to access current class object
    */

    // access modifiers :: public, private

    constructor(public name: string, public age: number, public rNo: number, public address: string) {
        this.name = name;
        this.age = age;
        this.rNo = rNo;
        this.address = address;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getrollNo(): number {
        return this.rNo;
    }

    getAddress(): string {
        return this.address;
    }

    getDetails() {
        console.log(`Student name is :: ${this.getName()} and age is :: ${this.getAge()}
         and roll no is :: ${this.getrollNo()} and address is :: ${this.getAddress()}`);
    }


}


