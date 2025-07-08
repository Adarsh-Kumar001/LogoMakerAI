# LogoMakerAI 

LogoMakerAI is an logo generation tool that allows users to create unique, professional-quality logos in seconds using the power of AI. It takes users through a few simple questions and then uses **Google Gemini** and **Midjourney** to generate logos based on the entered values.

---

## 🚀 Features

- Enter basic brand information (title, description, style, etc.)
- Uses **Google Gemini** to generate creative logo ideas
- Gemini then generates detailed image prompts based on your inputs
- Uses **Midjourney** to turn the AI-generated prompt into a unique logo image
- Logos are generated in seconds 
- Option to regenerate or download the logo

---

## 🧠 Workflow

1. **User Input**  
   User fills in 4–5 guided questions including:
   - Logo title
   - Brand description
   - Preferred colors

2. **Idea Generation**  
   Google Gemini analyzes the inputs and provides creative logo ideas.

3. **Prompt Engineering**  
   Once an idea is selected, Gemini crafts a rich image prompt using all the provided data.

4. **Image Generation**  
   The prompt is sent to the hosted **Midjourney** through api to generate the final logo image.

5. **Result Display**  
   The generated logo is shown to the user for download.

---

## 🛠️ Tech Stack

| Layer             | Technology                          |
|------------------|--------------------------------------|
| Frontend          | Next.js , Tailwind CSS |
| HTTP Client       | Axios                                |
| AI Models         | Google Gemini (Text) + Midjourney (Image) |
| Authentication    | Clerk                           |
| State Management  | React Hooks                     |
| Hosting           | Vercel                 |


###



## 📦 Setup Instructions





