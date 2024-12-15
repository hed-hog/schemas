/**
 * Initializes the generation process by clearing the console and printing a
 * message indicating that the schemas are being generated.
 */
export const init = () => {
  process.stdout.write('\x1Bc');
  console.log('\n\nGenerating schemas...\n');
};
