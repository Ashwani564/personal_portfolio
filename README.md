# Personal Portfolio - Ashwani Mishra

A retro-futuristic, sci-fi themed personal portfolio website showcasing my work as a Computer Science researcher and Machine Learning engineer.

## 🚀 Features

- **Old Sci-Fi Aesthetic**: Inspired by classic cyberpunk and retro-futuristic designs
- **Interactive Animations**: Powered by Anime.js for smooth, engaging animations
- **Particle Background**: Dynamic particle system using Particles.js
- **Terminal Interface**: Command-line inspired design elements
- **Glitch Effects**: Authentic retro-tech visual effects
- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading with efficient animations

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Advanced styling with custom properties and animations
- **JavaScript (ES6+)**: Modern JavaScript with modular architecture
- **Anime.js**: Lightweight animation library
- **Particles.js**: Interactive particle system
- **Google Fonts**: Orbitron and Share Tech Mono fonts
- **Font Awesome**: Icon library

## 📁 Project Structure

```
personal_portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🎨 Design Elements

### Color Palette
- **Primary Green**: #00ff41 (Matrix-style green)
- **Accent Blue**: #00d4ff (Cyber blue)
- **Secondary Orange**: #ff6b35 (Warning/accent color)
- **Background**: Dark theme with multiple shades

### Typography
- **Headers**: Orbitron (Sci-fi style font)
- **Body Text**: Share Tech Mono (Monospace font)

### Key Features
- Loading screen with boot sequence
- Terminal-style command interface
- Holographic visual elements
- Animated metrics and progress bars
- Interactive contact form
- Smooth scroll navigation

## 🚦 Getting Started

1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process required - pure HTML, CSS, and JavaScript

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile devices (320px - 767px)

## 🎮 Easter Eggs

Try the Konami Code (↑ ↑ ↓ ↓ ← → ← → B A) for a special surprise!

## 📈 Performance

- Fast loading times with optimized assets
- Efficient animations that don't block the main thread
- Lazy loading for non-critical elements
- Optimized for 60fps animations

## 🔧 Customization

The portfolio is highly customizable:
- Update content in `index.html`
- Modify colors in CSS custom properties
- Add new animations in `script.js`
- Replace project information with your own

## 📄 Resume Data

Personal resume: 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Technical Resume - Final Version
%
% This version removes the middle initial from the name.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%----------------------------------------------------------------------------------------
%	PACKAGES AND OTHER DOCUMENT CONFIGURATIONS
%----------------------------------------------------------------------------------------

\documentclass[letterpaper,10pt]{article} % Base font size is 10pt

\usepackage[letterpaper, margin=0.55in]{geometry} % Aggressive margins to ensure one-page fit
\usepackage{titlesec} % Allows customization of titles
\usepackage{hyperref} % For clickable links
\usepackage{xcolor} % For custom colors
\usepackage{enumitem} % For fine-grained control over list spacing
\usepackage{microtype} % Improves typography and spacing
\usepackage{graphicx} % Required for including images (like the QR code)

% Defines the custom color for hyperlinks
\definecolor{linkcolor}{rgb}{0.0,0.3,0.6}

% Hyperlink setup
\hypersetup{
    colorlinks=true,
    urlcolor=linkcolor,
    linkcolor=linkcolor,
}

% This command prevents LaTeX from stretching vertical space to fill the page
\raggedbottom

% Formatting for section titles (e.g., EDUCATION, SKILLS)
\titleformat{\section}{
  \vspace{-12pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

% Reduces space between paragraphs
\setlength{\parindent}{0in}
\setlength{\parskip}{0in}

%----------------------------------------------------------------------------------------
%	NAME AND CONTACT INFORMATION SECTION WITH QR CODE
%----------------------------------------------------------------------------------------

\begin{document}

% Set global list (itemize) properties for a readable, compact layout.
\setlist[itemize]{leftmargin=*, topsep=2pt, itemsep=1pt, parsep=0pt}

% Header with QR code on the left and contact info on the right
\noindent % Prevent indentation
\begin{minipage}[c]{0.7in} % Container for the QR code
    % Ensure qr_code.png is in the same directory as your .tex file.
    \includegraphics[width=0.7in]{qr_code.png}
\end{minipage}
\hfill % Creates flexible space between the two containers
\begin{minipage}[c]{\dimexpr\textwidth-0.8in\relax} % Container for the text
    \begin{center}
        {\Huge \scshape Ashwani (Ash) Mishra} \\ \vspace{1pt}
        \small 773-998-6828 $|$
        \href{mailto:am5082@msstate.edu}{am5082@msstate.edu} $|$
        Starkville, MS \\
        \href{https://github.com/Ashwani564}{github.com/Ashwani564} $|$
        \href{https://www.linkedin.com/in/ashwani-m1}{linkedin.com/in/ashwani-m1}
    \end{center}
\end{minipage}
\vspace{0.1in} % Add a little space before the first section


%----------------------------------------------------------------------------------------
%	EDUCATION SECTION
%----------------------------------------------------------------------------------------

\section*{Education}

\textbf{Mississippi State University}, Starkville, MS \hfill \textbf{May 2027} \\
\textit{B.S. in Computer Science, Shackouls Honors College} \\
Minor in Statistics \\
GPA: 4.0/4.0 \\
\textbf{Relevant Coursework}: Algorithms (CSE 4833), Computer Organization (CSE 3724), Systems Programming (CSE 3183), Statistical Inference (ST 3123) %

%----------------------------------------------------------------------------------------
%	SKILLS SECTION
%----------------------------------------------------------------------------------------

\section*{Skills}

\begin{itemize}
    \item \textbf{Languages:} Python (Advanced), C++ (Intermediate), JavaScript (Intermediate), SQL (Basic), Dart (Beginner)
    \item \textbf{Frameworks/Libraries:} scikit-learn, NumPy, Matplotlib, OpenGL, GLFW, Docker, Kubernetes, Apache Kafka, Flutter
    \item \textbf{Developer Tools:} Git, GNU Radio, VS Code, Linux/Unix
    \item \textbf{Databases:} PostgreSQL
\end{itemize}

%----------------------------------------------------------------------------------------
%	WORK EXPERIENCE SECTION
%----------------------------------------------------------------------------------------

\section*{Work Experience}

\textbf{NSPARC}, Hub, Starkville, MS \hfill \textbf{September 2025 -- Present} \\
\textit{Intern}
\begin{itemize}
    \item Collaborating with Dr. Asad to develop and implement innovative, data-driven solutions for local businesses. %
\end{itemize}

\textbf{Mississippi State University}, Starkville, MS \hfill \textbf{August 2023 -- August 2025} \\
\textit{Undergraduate Researcher}
\begin{itemize}
    \item Created a \href{https://github.com/Ashwani564/RT-Monodepth-Construction}{monocular depth estimation} system using YOLOV11, \href{https://github.com/Ashwani564/ml-depth-pro-flask}{Depth-pro}, and RT MonoDepth to accurately calculate the depth of construction objects, achieving real-time performance. %
    \item Annotated and trained an object detection model on 9,000+ open cattle feed lots in NAIP using YOLOV11, achieving 94\% classification accuracy. %
    \item Developed a data pipeline using Apache Kafka to boost an unsupervised learning model, achieving an F1 score of 0.91. %
    \item Containerized OAI gNb and UE core files using Docker and Kubernetes to streamline deployment processes. %
    \item Programmed 20+ OpenAI cellular Non-Real-Time RIC files using C++ for dynamic radio resource allocation. %
    \item Automated beamforming and power control of Sivers mmWave towers using GNU Radio and Bash scripting, achieving seamless automation for network testing. %
\end{itemize}

\textbf{Purdue University}, Hammond, IN \hfill \textbf{June 2024 -- August 2024} \\
\textit{Summer Research Intern}
\begin{itemize}
    \item Developed a linear regression model using the scikit-learn library, achieving 94\% prediction accuracy in crop yield rate forecasting. %
    \item Engineered a logistic regression model with scikit-learn for a multi-class problem, attaining 96\% classification accuracy in dry bean classification. %
\end{itemize}

%----------------------------------------------------------------------------------------
%	PROJECTS SECTION
%----------------------------------------------------------------------------------------

\section*{Projects}

\textbf{\href{https://github.com/Ashwani564/My-Library}{Library Mobile Application}} \hfill \textbf{Dart, Flutter}
\begin{itemize}
    \item Engineered a personal e-reader application with Flutter, enabling users to upload ePub files and customize their reading experience with an OLED-black theme and the exclusive Bookerly font.
\end{itemize}

\textbf{\href{https://github.com/Ashwani564/gravity_simulation}{Gravity Simulation}} \hfill \textbf{C++}
\begin{itemize}
    \item Developed a three-body gravity simulation using OpenGL and GLFW libraries to visualize the real-time gravitational effects between celestial objects. %
\end{itemize}

\textbf{YouTube Shorts Tracker Extension} \hfill \textbf{JavaScript, YAML}
\begin{itemize}
    \item Developing a novel browser extension to track YouTube Shorts watch time by parsing duration and count data from YouTube history via the YouTube Data API. %
\end{itemize}

\textbf{\href{https://github.com/Ashwani564/Bank-Management-System}{Bank Management System}} \hfill \textbf{C\#, PostgreSQL}
\begin{itemize}
    \item Developed a secure and efficient bank management system using C\# for the application logic and a PostgreSQL database to manage customer accounts, transactions, and data persistence. %
\end{itemize}

\textbf{Library Management System} \hfill \textbf{Python, PostgreSQL}
\begin{itemize}
    \item Designed and implemented a full-scale library management system using Python for logic and a PostgreSQL database for persistent data storage and retrieval. %
\end{itemize}

\end{document}