# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview


### Screenshot

![](./assets/images/Screenshot%202026-01-26%20152848.png)

### Links

- Solution URL: [https://github.com/hemadrikhandelwal/frontend_mentor_solutions/tree/recipe-page/recipe-page/recipe-page-main](https://github.com/hemadrikhandelwal/frontend_mentor_solutions/tree/recipe-page/recipe-page/recipe-page-main)
- Live Site URL: [https://recipe-page-lyart-eight.vercel.app/](https://recipe-page-lyart-eight.vercel.app/)

## My process
My approach was to build this project using **Tailwind CSS via the Tailwind CLI** and apply a **Flexbox-based layout** to closely match the provided design.  
I focused on clean structure, reusable styles, and readable UI spacing.

### Built with

- Semantic HTML5 markup  
- CSS custom properties  
- Flexbox  
- Tailwind CSS (CLI setup)

### What I learned

- How to style specific table rows using `:last-child`
- How to apply **custom colors to list bullets and numbers** using `::marker`
- Installing and configuring **Tailwind CSS via CLI**
- Using `@layer` to override and extend Tailwind utility classes
- Creating clean table designs with only bottom borders



```css

.nutrition-table tr:last-child {
  border-bottom: none;
}


.nutrition-table td:last-child {
  text-align: left;
  color: var(--color-brown-800);
}
```

### Continued development

- Improve responsiveness across different screen sizes

- Experiment with alternative layout approaches

- Refine spacing and alignment to better match design specifications

- Explore more advanced Tailwind utilities and custom components

## Author

- Name - Hemadri Khandelwal
- Frontend Mentor - [@hemadrikhandelwal](https://www.frontendmentor.io/profile/hemadrikhandelwal)



