import { getUserName, getComputerName } from '../../../src/helpers/system-helpers';

test('getUserName() gets the user name value', () => {
  const userName = getUserName();

  console.log(userName);

  expect(userName).not.toEqual('');
});

test('getComputerName() gets the computer name value', () => {
  const cpuName = getComputerName();

  console.log(cpuName);

  expect(cpuName).not.toEqual('');
});
