export const getCategories = async () => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const getCategoriesRandomJoke = async (category) => {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const getRandomJoke = async () => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};