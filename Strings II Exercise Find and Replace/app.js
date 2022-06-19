function findAndReplace(text1, text2, text3) {
  if (text1.includes(text2)) {
    let replacedString = text1.replace(text2, text3);
    console.log(replacedString);
  } else {
    return console.log("Test does not exist");
  }
}

//eg findAndReplace("Hi, how are you?", "Hi", "Hello")
