# My Prompts

# Context
```txt
I am a React Senior Developer.
My stack is <stack>.
```

# Generate Unit test cases for React Component
```txt
I use jest and react-testing library for testing my React Typescript components.  

Generate testcases for the following component(s):

<components>

Do not show description, reasoning or any additional test for the fixes.  Only share the code snippet.
```

# Generate Unit Test Cases for a method:
```txt
I am a Senior React Developer and use Jest and React Testing Library for web and app development.
Generate test cases for this method:

```ts
import { LIMIT, baseURL } from "../constants/apiUrls";

export const initialURL = `${baseURL}/pokemon?limit=${LIMIT}`;
export const allPokemonURL = `${baseURL}/pokemon?limit=1100`;

export const getPokemonData = async () => {
  const response = await fetch(`${initialURL}`);
  const result = response.json();
  return result;
};

export const getSpeciesDataById = async (id: number) => {
  const response = await fetch(`${baseURL}/pokemon-species/${id}/`);
  const result = await response.json();
  return result;
};

export const getPokemonTypesById = async (id: number) => {
  const response = await fetch(`${baseURL}/type/${id}/`);
  const result = await response.json();
  return result;
};

export const getPokemonTypes = async () => {
  const response = await fetch(`${baseURL}/type`);
  const result = await response.json();
  return result;
};

export const getPokemonGenders = async () => {
  const response = await fetch(`${baseURL}/gender`);
  const result = await response.json();
  return result;
};

export const getPokemonDataById = async (id: number) => {
  const response = await fetch(`${baseURL}/pokemon/${id}/`);
  const result = response.json();
  return result;
};

export const getPokemonDataByURL = async (URL: string) => {
  const response = await fetch(URL);
  const result = response.json();
  return result;
};

export const numberFormation = (number: number) => {
  if (Number(number) < 10) return `00${number}`;
  if (Number(number) > 10 && Number(number) < 100) return `0${number}`;
  return number;
};

export const getAllParallelCall = async (ApiUrls: string[]) => {
  return await Promise.all(
    ApiUrls.map(async (url) => {
      const res = await fetch(url);
      return res.json(); // Send request for each id
    })
  );
};


```

Do not show description, reasoning or any additional test for the fixes.  Only share the code snippet.
```

```
# Finding errors in test cases for a React Typescript component

```txt
I'm writing tests for a React component Typescript.  The error in the console is:

<errorMessage>

Suggest fixes for this error.

Do not show description, reasoning or any additional test for the fixes.  Only share the code snippet.

Also, suggest how I can improve my prompt.
```

<!-- # Generate test cases for React component -->

# Generate Interface for a Typescript React Component:
```txt
Generate the Typescript Interface for the following components and include it in the code.

<components>

Do not show description, reasoning or any additional test for the fixes.  Only share the code snippet.
```

# Writing stories in Storybook version 8
```txt
Generate Storybook version 8 stories for <component-name> component:

<component>

These are the types for the props (if applicable):

<types/interfaces>

Here is an example of stories for a Button component.

<example>

Do not show description, reasoning or any additional test for the fixes.  Only share the code snippet.
```

# Instructions
```txt
<instruction>

Do not show description, reasoning or any additional test for the fixes.  Only share the code snippet.
```

# Suggestions
- ensure clarity and conciseness
- specify the exact error message, context and desired outcome.