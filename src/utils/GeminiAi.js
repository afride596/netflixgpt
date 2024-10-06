/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */
// "use client";

// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from "@google/generative-ai";

// const apiKey = process.env.NEXT_PUBLIC_GEMINIS_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// export const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-pro",
// });

// export const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

//   async function run() {
//     const chatSession = model.startChat({
//       generationConfig,
//    // safetySettings: Adjust safety settings
//    // See https://ai.google.dev/gemini-api/docs/safety-settings
//       history: [
//       ],
//     });

//     const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//     console.log(result.response.text());
//   }

//   run();
