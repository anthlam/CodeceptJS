/* eslint-disable radix */
Feature('Run Rerun - Command');

BeforeSuite((I) => {
  process.env.FAIL_ATTEMPT = parseInt(process.env.FAIL_ATTEMPT) + 1;
  console.log(process.env.FAIL_ATTEMPT);
  if (process.env.FAIL_ATTEMPT === '2') {
    throw new Error('Test Error');
  }
});

Scenario('@RunRerun - fail BeforeSuite', (I) => {
  I.printMessage('RunRerun');
});
