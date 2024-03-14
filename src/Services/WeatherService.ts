import { faker } from "@faker-js/faker";

// Assuming WeatherData is defined somewhere else, ensure it's correctly defined like this:
interface WeatherData {
    temperature: number;
    humidity: number;
    wind: number;
    rain: number;
}

export const generateLondonWeatherData = (): WeatherData => {
    const generatedWeatherData: WeatherData = {
        temperature: faker.datatype.number({ min: -15, max: 30 }),
        humidity: faker.datatype.number({ min: 79, max: 86 }),
        wind: faker.datatype.number({ min: 2, max: 78 }),
        rain: faker.datatype.number({ min: 65, max: 75 }),
    };

    return generatedWeatherData;
};

export const generateDublinWeatherData = (): WeatherData => {
    const generatedWeatherData: WeatherData = {
        temperature: faker.datatype.number({ min: -15, max: 30 }),
        humidity: faker.datatype.number({ min: 79, max: 86 }),
        wind: faker.datatype.number({ min: 2, max: 78 }),
        rain: faker.datatype.number({ min: 65, max: 75 }),
    };

    return generatedWeatherData;
};
