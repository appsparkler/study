# Prompt Engineering
https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/using-the-included-handouts?autoSkip=true&resume=false&u=2130370

## Prompt
A users interface with generative AI models through natural language input.
Basically, what we tell the model to do is a prompt

### Chain Of Thought Prompting
To encourage the AI model to be factual or correct by forcing it to follow a series of steps in its "reasoning".  This helps in reducing hallucinations.
#### Example 1:
```txt
What European soccer team won the Champions League the year
Barcelona hosted the Olympic games?
Use this format:
Q: ‹repeat_question>
A: Let's think step by step. ‹give_reasoning> Therefore, the answer is ‹final_answer>.
```
#### Example 2:
```txt
What is the sum of squares of the individual digits of the last year that Barcelona F.C. won the championship league?
Use this format:
Q: < repeat_question>
A: Let's think step by step. ‹give_reasoning> Therefore, the answer is ‹final_answer>.
```

#### Example 3
```txt
Prompt:
What are the top three most important discoveries that the Hubble Space Telescope has enabled? Answer only using reliable sources and cite those sources.
```

### Special Syntax

##### End Of Prompt
`<|endofprompt|>` - allows to end a prompt and include the beginning of an answer.  For ex.

```txt
Write a scary story. <|endofprompt|> It was a beautiful winter day.
```

##### Assertive
Use all capital case to assert something.


