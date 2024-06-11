

const person = {
    firstName: 'mehedi',
    lastName: 'nasim',

    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error("Value is not a string");

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter first & last name')

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
person.fullName = '';

} catch (error) {
    alert(error);
}
console.log(person)