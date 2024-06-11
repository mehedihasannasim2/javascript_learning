
const person = {
    firstName: 'mehedi',
    lastName: 'nasim',
    get fullName () {
        return `${person.firstName} ${person.lastName}}`
    },
    set fullName (value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'neaz uddin';
console.log(person)