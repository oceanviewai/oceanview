const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: req.body.prompt,
      max_tokens: 60
    }, {
      headers: {
        'Authorization': `Bearer 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`,
        'Content-Type': 'application/json'
      }
    });
    res.status(200).send(response.data.choices[0].text.trim());
  } catch (error) {
    res.status(500).send('An error occurred.');
  }
};
