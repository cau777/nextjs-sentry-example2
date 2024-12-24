import * as Sentry from "@sentry/nextjs";

const Test5 = () => (
  <>
    <h1>Client Test 5</h1>
    <button
      onClick={() => {
        try {
          // Some operation the button does, but fails
          throw new Error("Client Test 5");
        } catch (error) {
          Sentry.captureException(error);
        } finally {
          transaction.finish();
        }
      }}
    >
      Click me to create a transaction and throw an Error
    </button>
  </>
);

export default Test5;
