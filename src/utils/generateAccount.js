function* numberGenerator() {
    let id = 1;
    while (true) {
        const increment = yield id;
        if (increment !== null) {
            id = increment;
        } else {
            id++;
        }
    }
}

export const generateAccountNumber = () => {
    const generatorObject = numberGenerator();
    const id = generatorObject.next().value;
    return `A${id}-${crypto.randomUUID()}`;
};
