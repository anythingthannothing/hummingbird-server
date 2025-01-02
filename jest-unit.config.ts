import type { Config } from 'jest';

export default (): Config => ({
  moduleFileExtensions: ['js'],
  rootDir: 'dist',
  testRegex: '.*\\.spec\\.js$',
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
});
