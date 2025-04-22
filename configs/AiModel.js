import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

const config = {
  responseMimeType: 'application/json',
};

const model = 'gemini-2.5-pro-preview-03-25';

const contents = [
  {
    role: 'user',
    parts: [
      {
        text: `write a script to generate a 30-second video on topic: interesting historical stories along with image prompt in realistic style for each scene, and give me result in JSON format with 'imagePrompt' and 'contextText' as fields`,
      },
    ],
  },
  {
    role: 'model',
    parts: [
      {
        text: `Here's a thought process... (continue your explanation)`,
      },
      {
        text: `\`\`\`json
        [
          {
            "scene": 1,
            "duration_seconds": 5,
            "imagePrompt": "photorealistic, wide shot...",
            "contextText": "History is full of grand battles..."
          },
          {
            "scene": 2,
            "duration_seconds": 8,
            "imagePrompt": "photorealistic, eye-level shot...",
            "contextText": "Like the Great Emu War of 1932..."
          }
        ]
        \`\`\``,
      },
    ],
  },
];

try {
  const response = await ai.chat({
    model: model,
    contents: contents,
    config: config,
  });

  const videoScript = response.data; // Handle the response
  console.log('Generated Video Script:', videoScript);
} catch (error) {
  console.error('Error generating video script:', error.message);
}
