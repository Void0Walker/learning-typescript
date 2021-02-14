let userInput: unknown;

userInput = 5;
userInput = "AK";

function generateError(message: string, code: number): never {
  throw { message, code };
}

generateError("Error occured", 500);
