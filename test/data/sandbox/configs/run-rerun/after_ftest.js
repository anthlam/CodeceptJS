/* eslint-disable radix */
Feature('Run Rerun - Command');

After((I) => {
  process.env.FAIL_ATTEMPT = parseInt(process.env.FAIL_ATTEMPT) + 1;
  console.log(process.env.FAIL_ATTEMPT);
  if (process.env.FAIL_ATTEMPT === '2') {
    throw new Error('Test Error');
  }
});

Scenario('@RunRerun - fail AfterEach', (I) => {
  I.printMessage('RunRerun');
});
