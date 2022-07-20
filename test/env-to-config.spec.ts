import { ENV, envToConfig } from '../src/env-to-config';

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
            PATH_REDIRECT: '/->localhost:50051,/test1/->localhost:50051,/test2/->localhost:50053',
        }
    }
];

describe('envToConfig', () => {
    for (const test of tests) {
        it(test.name, () => {
            expect(envToConfig(test.env)).toMatchSnapshot();
        });
    }
});
