
export default async function handler(req, res) {
  const { prompt, tone } = req.body;

  const stylePrefix = {
    'Futuristický': "Napíš to ako futuristický vizionár:",
    'Filozofický': "Napíš to ako hlboký filozof:",
    'Revolučný': "Napíš to ako rebel, ktorý mení systém:"
  }[tone] || "";

  const systemPrompt = `${stylePrefix} ${prompt}`;

  try {
    console.log("➡️ PRÍCHOD požiadavky:");
    console.log("Prompt:", prompt);
    console.log("Tone:", tone);
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer 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`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Si inteligentná, profesionálna AI s vizionárskym hlasom.' },
          { role: 'user', content: systemPrompt }
        ],
        temperature: 0.8
      }),
    });

    const json = await response.json();
    const text = json.choices?.[0]?.message?.content?.trim();
    res.status(200).json({ text });
  } catch (error) {
    console.error('Chyba v OpenAI API:', error);
    res.status(500).json({ text: '⚠️ Chyba pri volaní AI.' });
  }
}
