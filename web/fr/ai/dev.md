# AI for Front End Development

# Prompting
- 0 shot - giving AI a task without any prior examples (context)
    > Explain what a large language model is.
- 1 shot - provide one example with our prompt
    > “A Foundation Model in AI refers to a model like GPT-3,
which is trained on a large dataset and can be adapted to various tasks.
Explain what BERT is in this context.”
- few shot - giviging AI a task with few examples
    > Foundation Models such as GPT-3 are used for natural languageprocessing, while models like DALL-E are used for image generation.  How are Foundation Models used in the field of robotics?
- chain of thought - here we ask the AI to detail its "thought" process step by step.
    > Describe the process of developing a Foundation Model in AI, from data collection to model training
- iterative prompting - 
    > first prompt: Tell me about the latest developments in Foundation Models in AI.

    > next prompt: Can you provide more details about these improvements in multi-modal learning within Foundation Models?
- negative prompting - here, we tell AI what not to do.
    > Explain the concept of Foundation Models in AI without mentioning natural language processing or NLP
- hybrid prompting - use multiple prompt types - few shot + chain-of-thought, for ex.
    > Like GPT-3, which is a versatile model used in various language tasks, explain how Foundation Models are applied in other domains of AI, such as computer vision.
- chaining - here we break down a complex task into smaller prompts and then chain the outputs together to form a final response.
    > first prompt: List some examples of Foundation Models in AI

    > next prompt: Choose one of these models and explain its foundational role in AI development
    
# Writing Code
- write methods
- generate tests

# Storybook
- it can help us setup storybook
- it can help us generate stories
- it can help us with accessibility testing