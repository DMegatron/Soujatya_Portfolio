### Step 1: Set Up Your React Project

First, you need to set up a new React project. You can use Create React App for this:

```bash
npx create-react-app my-portfolio
cd my-portfolio
```

### Step 2: Install Tailwind CSS

Next, install Tailwind CSS by following the official installation guide. Here’s a quick setup:

1. Install Tailwind CSS via npm:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configure your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Add Tailwind to your CSS by editing `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 3: Create Your Portfolio Structure

Now, let's create the basic structure of your portfolio. You can create components for each section.

#### 1. Create Components

Create a folder named `components` inside the `src` directory and create the following files:

- `Header.js`
- `About.js`
- `Projects.js`
- `Skills.js`
- `Contact.js`
- `Footer.js`

#### 2. Example Component Code

Here’s a simple example of what each component might look like:

**Header.js**

```jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-5">
      <h1 className="text-3xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
```

**About.js**

```jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-10">
      <h2 className="text-2xl font-bold">About Me</h2>
      <p className="mt-4">I am a passionate developer with experience in building web applications...</p>
    </section>
  );
};

export default About;
```

**Projects.js**

```jsx
import React from 'react';

const Projects = () => {
  const projectList = [
    { title: 'Project One', description: 'Description of project one.' },
    { title: 'Project Two', description: 'Description of project two.' },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="p-10">
      <h2 className="text-2xl font-bold">Projects</h2>
      <ul className="mt-4">
        {projectList.map((project, index) => (
          <li key={index} className="mt-2">
            <h3 className="font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
```

**Skills.js**

```jsx
import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'Tailwind CSS'];

  return (
    <section id="skills" className="p-10">
      <h2 className="text-2xl font-bold">Skills</h2>
      <ul className="mt-4">
        {skills.map((skill, index) => (
          <li key={index} className="mt-2">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
```

**Contact.js**

```jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-10">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <form className="mt-4">
        <input type="text" placeholder="Your Name" className="border p-2 w-full mb-4" />
        <input type="email" placeholder="Your Email" className="border p-2 w-full mb-4" />
        <textarea placeholder="Your Message" className="border p-2 w-full mb-4" rows="4"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2">Send</button>
      </form>
    </section>
  );
};

export default Contact;
```

**Footer.js**

```jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-5 text-center">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
```

#### 3. Main App Component

Now, you can use these components in your `App.js`:

```jsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
```

### Step 4: Run Your Application

Now you can run your application:

```bash
npm start
```

### Step 5: Customize and Deploy

You can customize the content, styles, and layout according to your preferences. Once you're satisfied with your portfolio, you can deploy it using platforms like Vercel, Netlify, or GitHub Pages.

### Conclusion

This is a basic structure for a modern portfolio website using React and Tailwind CSS. You can expand upon this by adding more features, animations, and styles to make it unique and reflective of your personal brand.