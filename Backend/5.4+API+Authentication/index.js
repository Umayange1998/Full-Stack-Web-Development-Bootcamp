import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "johndoe";
const yourPassword = "johndoe123";
const yourAPIKey = "50ae1c73-3e99-4d80-aca7-9182470deccc";
const yourBearerToken = "dffaf0ad-d34e-4b5c-8071-2e8b07ae5000";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch(error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch(error) {
    res.status(404).send(error.message);
  }

  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", async (req, res) => {
  try {
    const results =await axios.get(API_URL + "filter?", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(results.data) });
  } catch(error) {
    res.status(404).send(error.message);
  }

  
});
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken",async (req, res) => {

  try{
    const result = await axios.get(API_URL+"secrets/1",config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch(error) {
    res.status(404).render(error.message);
  }
 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
