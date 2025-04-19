export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ text: '❌ Iba POST metóda je povolená.' });
  }

  const { prompt, tone } = req.body;

  // Debug logovanie
  console.log("➡️ PRÍCHOD požiadavky:");
  console.log("Prompt:", prompt);
  console.log("Tone:", tone);

  if (!prompt || !tone) {
    return res.status(400).json({ text: '⚠️ Chýba prompt alebo tone.' });
  }

  const stylePrefix = {
    'Futuristický': "Napíš to ako futuristický vizionár:",
    'Filozofický': "Napíš to ako hlboký filozof:",
    'Revolučný': "Napíš to ako rebel, ktorý mení systém:"
  }[tone] || '';

  const systemPrompt = `${stylePrefix} ${prompt}`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer sk-...`, // ← TU daj svoj API kľúč
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

    if (json.error) {
      console.error("❌ OpenAI Error:", json.error);
      return res.status(500).json({ text: `❌ OpenAI API chyba: ${json.error.message}` });
    }

    const text = json.choices?.[0]?.message?.content?.trim();
    res.status(200).json({ text });
  } catch (error) {
    console.error("❌ Chyba v API volaní:", error);
    res.status(500).json({ text: '❌ Chyba pri volaní OpenAI API.' });
  }
}
