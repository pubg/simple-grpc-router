import { ENV, envToConfig } from '../src/env-to-config';
import { generateConfig } from '../src/generate-config';

type TEST = {
    name: string;
    env: ENV;
}

const defaultEnv = {
};

const tests: TEST[] = [
    {
        name: 'basic',
        env: {
            ...defaultEnv,
            PATH_REDIRECT: '/->localhost:50051,/test1/->localhost:50051,/test2/->localhost:50052',
        }
    }
];

describe('generate', () => {
    for (const test of tests) {
        it(test.name, () => {
            const config = envToConfig(test.env);
            expect(generateConfig(config)).toMatchSnapshot();
        });
    }
});
