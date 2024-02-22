export const handler = async (event, context) => {
    try{
         let keyword = event.queryStringParameters.word;
    if (keyword) {
        return "Julie says " + keyword;
    }
    else {
        return "Error: Didn't get keyword";
    }
    }
  catch (error) {
      return "Error: invalid json"
  }
    
};
