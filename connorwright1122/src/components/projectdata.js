export const experienceData = [
    {
        title: 'Software Engineering Intern',
        img: '/assets/images/experience/hirez-logo.jpeg',
        //link: '#',
        details: {
            origin: 'Hi-Rez Studios',
            date: 'Summer 2024 - Spring 2025',
            tools: 'Python/PyTorch, Unreal Engine, InvokeAI, Stable Diffusion'
        },
        slug: 'hi-rez-2024',
        desc: {
            p1: 'From June 2024 to January 2025, I had the opportunity to work with a team of UI, concept, and FX artists \
            at Hi-Rez Studios to explore use cases of generative AI tools across all stages of game art preceeding the launch of Smite 2. \
            We focused on what was possible using open-source models and InvokeAI, an artist-first tool that enables the use of sketches and other work to guide the image generation process.\
            Proof of concept testing showed that using these resources and other tools that I created, asset creation time could be reduced by up to 75% and turn day-long projects into <3-hour tasks. \ ',
            plist: 'Here is a list of some of the specific things I worked on:',
        } ,
        list1: {
            li1: 'Unreal Engine blueprint for automatically creating image datasets of in-game characters for use in custom model training',
            li2: 'Automatic dataset captioner using Salesforce\'s BLIP model and JSONL file training paramaters generator',
            li3: 'Image segmentation tool capable of separating AI-generated image into a PSD file with artist-friendly layers using the PSDTools library and K-Means clustering for further touchups in Photoshop',
            li4: 'Node-based workflows inside Invoke for streamlining specific use cases (ex. Sketch to Painterly, Graybox to In-Game Screenshot)',
            li5: 'Pipelines for remastering Smite 1 ability icons into the Smite 2 art style',
            li6: '20+ Stable Diffusion LoRA image models for 3D characters, particle FX, UI icons, concept art, and personal art styles',
        }
    },

    {
        title: 'Product Management Intern',
        img: '/assets/images/experience/thd-logo.jpeg',
        //link: '#',
        details: {
            origin: 'The Home Depot',
            date: 'Summer 2024',
            tools: 'Figma, Photoshop, MS Office Suite'
        },
        slug: 'thd-2024',
        desc: {
            p1: 'In Summer 2024, I worked with the CX Reimagine Customer Services Workstream to analyze the customer\'s IVR entry experience. \
            My project focused on researching the existing online and in-store entry points for the Home Services program and offering \
            potential solutions for streamlining the IVR process.',
        } ,
        list1: {
            li1: 'Analyzed online/in-store entry points for Services program to identify friction points in customer journey and IVR',
            li2: 'Created actionable product strategy and hi-fi mockups in Figma to reduce 2000+ telephone entry points by 85%',
        }
    },

    {
        title: 'Undergraduate Researcher',
        img: '/assets/images/experience/gt-expressive.jpg',
        link: 'https://expressivemachinery.gatech.edu/projects/luminai/',
        details: {
            origin: 'Expressive Machinery Lab',
            date: 'Spring 2024',
            tools: 'C#, NoSQL, MongoDB, Unity, Blender'
        },
        slug: 'eml-2024',
        desc: {
            p1: 'In Spring 2024, I worked for Georgia Tech\'s Expressive Machinery Lab under Dr. Brian Magerko. \
            I was lucky to be a part of the LuminAI team as they prepared for the world\'s first AI-Human improv dance performance, the culmination of 10+ years of prior research where human actions drive live generated responses from an embodied AI agent. \
            My tasks primarily focused on creating Unity and MongoDB-based tools for the researchers to aid in data collection, visualization, and performance management.',
            plist: 'Here is a list of some of the specific things I worked on:',
        } ,
        list1: {
            li1: 'Developed gesture database viewer for 3D visualization of movements and simpler database file management / cleanup ',
            li2: 'Created CSV-based interaction logging system with Azure Kinect SDK for use in KSU dance class for data collection',
            li3: 'Various bug fixes for avatar\'s inverse kinematic bone system and animation playback',
            li4: 'Designed algorithms to apply Viewpoints movement theories to AI avatar\'s gestures',
            li5: 'Wrote scripts to parse live audience responses to questionnaire and playback inside Unity scene',
            li6: 'Implemented UI designs and functionalities for avatar setting management during live performance'
        },
        links: {
            //Description, link, type, image
            lk1: ['Full Performance (Edited)','https://youtu.be/39KtahFtd3s?si=3arvfdaqyrA_gP42', 'yt', ''],
            lk2: ['Full Performance (Unedited)','https://youtu.be/2769H-81EmI', 'yt', ''],
            lk3: ['LuminAI Project Site','https://expressivemachinery.gatech.edu/luminai/', 'a', '/assets/images/projects/luminai-poster.png' ],
        }
    },

    {
        title: 'Undergraduate Researcher',
        img: '/assets/images/experience/gt-vip.jpeg',
        //link: 'https://expressivemachinery.gatech.edu/projects/luminai/',
        details: {
            origin: 'GT VIP - Unlocking and Analyzing Historical Texts',
            date: 'Spring 2024 - Spring 2025',
            tools: 'Python, PyTorch, SciKit Learn'
        },
        slug: 'vip',
        desc: {
            p1: 'Georgia Tech\'s Vertically Integrated Projects program allows students to work with faculty on long-term multidisciplinary research projects. \
            I was a part of the Unlocking and Analyzing Historical Texts VIP for 3 semesters from Spring 2024 to Spring 2025.\
            Our projects focused on applying Natual Language Processing tools and techniques to Ancient Greek and Early Modern English works using GT\'s High Perfomance Computing clusters. \
            My subteam focused on analyzing the variation in orthography over time in Early Modern English texts using the EEBO digital library, \
            denoting periods of major spelling change and the evolution of standardization of the English language in printing presses.',
            plist: 'Here is a list of some of the tasks we worked on:',
        } ,
        list1: {
            li1: 'Naive Bayes Classifier to predict decade based on TF-IDF tokens of document ',
            li3: 'Word cloud visualization for most informative features (words) for each decade',
            li4: 'Custom Levenstein Distance-based clustering of words and their variant spellings',
            li5: 'Statistical tests for evaluating best cluster distance threshold',
            li6: 'Visualizations for Spelling Variation Entropy per Decade per-cluster and for all word clusters',
            li7: 'Hypotheses for correlated events that would cause periods of spelling normalization'
        },
    },

    {
        title: 'VR Software Developer',
        img: '/assets/images/experience/gt-oit-omniverse.jpeg',
        //link: 'https://expressivemachinery.gatech.edu/projects/luminai/',
        details: {
            origin: 'GT OIT - Academic/Research Technology Division',
            date: 'Spring 2023 - Spring 2024',
            tools: 'C#, Unity, NVIDIA Omniverse, LumaAI, Blender, Figma'
        },
        slug: 'oit',
        desc: {
            p1: 'From Spring 2023 to Spring 2024 I worked under Didier Contis in Academic/Research Technology Division of Georgia Tech\'s Office of Information Technology. \
            My team focused on exploring use cases of emerging technologies such as VR, real-time 3D engines, and photogrammetry for Georgia Tech courses, research labs, and student/faculty organizations. \
            We also partnered with NVIDIA and Microsoft to evaluate usage of their new Omniverse and Mesh softwares for higher education.',
            plist: 'Here is a list of some of the projects I led or worked on:',
        } ,
        list1: {
            li1: 'Arts@Tech - Digital Art District for online exhibition of work by student organizations (interactive viewer for Erato Magazine editions, \
            online theater for Buzz Studios short films, 3D motion capture performance by TekStyles dancers), and GT arts initiatives (photogrammetry scans of public art pieces)',
            li2: 'Mechanical Engineering Department - Digitial Twin / Interactive Tour of the Student Competition Center Tour using Matterport photogrammetry scans of the space and vehicles built by motorsport student organizations',
            li3: 'LMCFilms - Film pre-production workflow tutorial for storyboarding using photogrammetry scans',
            li4: 'GT Campus Development - To-scale massing model of the entire Georgia Tech campus ',
            li5: 'LMC 3407 - Camera Settings + Lens Size Learning Lab ',
            li6: 'ME 2110 - Robot and competition arena task simulation',
            li7: 'IMAGINE Lab - Kendeda Building Digital Twin',
            li8: 'Aerospace Systems Design Lab - Moon Habitat Digital Twin',
            li11: 'Architecture Department - Capstone Visualization with real-world location / time-of-day lighting',
            li9: 'NVIDIA Omniverse - Light ray simulation of the Camera Obscura effect',
            li10: 'NVIDIA Omniverse - Accurate physics-based trebuchet ',
        },
        links: {
            //Description, link, type, image
            lk1: ['OIT - NVIDIA Omniverse Projects','https://www.youtube.com/watch?v=RCdzroUtEZc&list=PLtgqXFBFu9f1bErwA9hQqkkWIuaq9S8dz', 'a', '/assets/images/experience/gt-oit-omniverse.jpeg'],
            lk2: ['OIT - Microsoft Mesh Projects','https://www.youtube.com/watch?v=6S0_1a1b8k4&list=PLtgqXFBFu9f0wNr6N7sdX6bJ7HXPm-VOQ', 'a', '/assets/images/experience/gt-oit-nda.png'],
            lk3: ['Co-worker\'s Write Up of the SCC Tour','https://www.jackenglish.net/portfolio/student-competition-center-photogrammetry-tour', 'a', '/assets/images/projects/gtxr-bdbi-vrsa.png' ],
        }
    },

    {
        title: 'Game Development Extern',
        img: '/assets/images/experience/shipwright-studios-1710.avif',
        //link: 'https://expressivemachinery.gatech.edu/projects/luminai/',
        details: {
            origin: 'Shipwright Studios',
            date: 'Winter 2022',
            tools: 'C#, Unity, Substance Painter, Blender, Figma'
        },
    },


    
];
  
export const projectData = [
    {
        title: 'Buzz Studios Film Archive',
        img: '/assets/images/projects/buzzstudios-archive.png',
        link: 'https://github.com/Buzz-Studios-Development-Team/BuzzStudiosFilmArchive',
        details: {
            origin: 'Buzz Studios Filmmaking Club',
            date: 'Spring 2025 - Present',
            tools: 'React.js, Node.js, GCP, HTML/CSS/JS',
            description: 'Developer for film club\'s in-house short film streaming service hosting projects dating back to 2001',
        }
    },

    {
        title: 'VR Heartrate State Analysis',
        img: '/assets/images/projects/gtxr-bdbi-vrsa.png',
        //link: 'https://github.com/connorwright1122/anim2spritesheet',
        details: {
            origin: 'VR @ GT / Big Data Big Impact Club',
            date: 'Spring 2025 - Present',
            tools: 'C#, Unity, Python/PyTorch, ADB',
            description: 'ML-based prediction of heartrate using micro-movements of VR headset motion sensor data',
        }
    },

    {
        title: '3D Character to 2D AI Imagery Pipeline',
        img: '/assets/images/projects/hirez-bp.png',
        //link: 'https://github.gatech.edu/pages/riyer75/4641/',
        details: {
            origin: 'Hi-Rez Studios',
            date: 'Summer 2024 - Spring 2025',
            tools: 'Unreal Engine, Python/PyTorch/Pandas, InvokeAI',
            description: 'AI-powered tools and workflows for dataset generation, model training, and AI-generated image segmentation',
        },
        slug: 'hi-rez-2024',
        desc: {
            p1: 'From June 2024 to January 2025, I had the opportunity to work with a team of UI, concept, and FX artists \
            at Hi-Rez Studios to explore use cases of generative AI tools across all stages of game art preceeding the launch of Smite 2. \
            We focused on what was possible using open-source models and InvokeAI, an artist-first tool that enables the use of sketches and other work to guide the image generation process.\
            Proof of concept testing showed that using these resources and other tools that I created, asset creation time could be reduced by up to 75% and turn day-long projects into <3-hour tasks. \ ',
            plist: 'Here is a list of some of the specific things I worked on:',
        } ,
        list1: {
            li1: 'Unreal Engine blueprint for automatically creating image datasets of in-game characters for use in custom model training',
            li2: 'Automatic dataset captioner using Salesforce\'s BLIP model and JSONL file training paramaters generator',
            li3: 'Image segmentation tool capable of separating AI-generated image into a PSD file with artist-friendly layers using the PSDTools library and K-Means clustering for further touchups in Photoshop',
            li4: 'Node-based workflows inside Invoke for streamlining specific use cases (ex. Sketch to Painterly, Graybox to In-Game Screenshot)',
            li5: 'Pipelines / models for remastering Smite 1 ability icons into the Smite 2 art style',
            li6: '20+ Stable Diffusion LoRA image models for 3D characters, particle FX, UI icons, concept art, and personal art styles',
        }
    },

    {
        title: 'ML Inland Water Quality Predictor',
        img: '/assets/images/projects/aquasat.jpg',
        link: 'https://github.gatech.edu/pages/riyer75/4641/',
        details: {
            origin: 'CS 4641 - Machine Learning - Semester-Long Project',
            date: 'Spring 2025',
            tools: 'Python/PyTorch/Pandas',
            description: 'ML-based estimation of inland water quality using satellite imagery reflectance data',
        }
    },

    {
        title: 'VTT Caption AI Translator',
        img: '/assets/images/projects/vtt-ai.jpg',
        link: 'https://github.com/Buzz-Studios-Development-Team/vtt-ai-translator',
        details: {
            origin: 'Buzz Studios Filmmaking Club',
            date: 'Spring 2025',
            tools: 'Python, OpenAI API',
            description: 'Fluent translation of VTT subtitle files using OpenAI API',
        }
    },

    {
        title: 'Tachyon Deliverance',
        img: '/assets/images/projects/TachyonStill_2.5.2.jpg',
        //link: 'https://github.com/connorwright1122/anim2spritesheet',
        details: {
            origin: 'Buzz Studios Filmmaking Club',
            date: 'Spring 2025',
            tools: 'Blender, DaVinci Resolve, Photoshop, Figma, InvokeAI, TRELLIS',
            description: 'Director/Writer/Editor/VFX Artist/Prop Master for Sci-Fi Comedy short film with 20+ VFX shots',
        }
    },

    {
        title: 'Early Modern English Text Analysis Tools',
        img: '/assets/images/projects/vip_img1_0.png',
        link: 'https://github.gatech.edu/VIP-HistoricalTexts/OrthographyTeam',
        details: {
            origin: 'GT VIP Program',
            date: 'Spring 2024 - Spring 2025',
            tools: 'Python, PyTorch, SLURM',
            description: 'Tools for analyzing orthography / spelling variation over time in Early Modern English Texts',
        }
    },

    {
        title: 'Custom Computer Graphics Scenes',
        img: '/assets/images/projects/3451-final.png',
        link: 'https://www.instagram.com/p/DD5bMxnpglH/?hl=en&img_index=1',
        details: {
            origin: 'CS 3451 - Computer Graphics',
            date: 'Fall 2024',
            tools: 'OpenGL, C++, GLSL',
            description: 'Custom implementations of computer graphics algorithms completed during CS 3451',
        }
    },

    {
        title: 'anim2spritesheet',
        img: '/assets/images/projects/anim2spritesheet-cover-2.jpg',
        link: 'https://github.com/connorwright1122/anim2spritesheet',
        details: {
            origin: 'Blender Addon',
            date: 'Summer 2024',
            tools: 'Python, Blender API, PIL',
            description: 'Automatic rendering of 3D animations as 2D albedo, normal, or emission spritesheets',
        }
    },

    {
        title: 'Invoke AI Prompt Builder',
        img: '/assets/images/projects/GTPM-Invoke.jpg',
        link: 'https://docs.google.com/document/d/1MZDG4yYLGb5hRCRPTSaC1IrqAaKX4BRSO0LPUX32Z0Y/edit?tab=t.0',
        details: {
            origin: 'Product @ GT / Invoke AI Collaboration',
            date: 'Spring 2024',
            tools: 'InvokeAI, Figma, Photoshop',
            description: 'Proposed redesign / features for prompt-building experience of Invoke AI image generator',
        }
    },

    {
        title: 'LuminAI Research / Developer Tools',
        img: '/assets/images/projects/luminai-ss.png',
        link: 'https://youtu.be/39KtahFtd3s?si=fVzPbntVArJiVVkB',
        details: {
            origin: 'Expressive Machinery Lab',
            date: 'Spring 2024',
            tools: 'C#, Unity, NoSQL, MongoDB, Blender',
            description: 'Tools for LuminAI developers/researchers - gesture database visualizer, performance manager UI, etc.',
        }, 
        slug: 'eml-2024',
        desc: {
            p1: 'In Spring 2024, I worked for Georgia Tech\'s Expressive Machinery Lab under Dr. Brian Magerko. \
            I was lucky to be a part of the LuminAI team as they prepared for the world\'s first AI-Human improv dance performance, the culmination of 10+ years of prior research where human actions drive live generated responses from an embodied AI agent. \
            My tasks primarily focused on creating Unity and MongoDB-based tools for the researchers to aid in data collection, visualization, and performance management.',
            plist: 'Here is a list of some of the specific things I worked on:',
        } ,
        list1: {
            li1: 'Developed gesture database viewer for 3D visualization of movements and simpler database file management / cleanup ',
            li2: 'Created CSV-based interaction logging system with Azure Kinect SDK for use in KSU dance class for data collection',
            li3: 'Various bug fixes for avatar\'s inverse kinematic bone system and animation playback',
            li4: 'Designed algorithms to apply Viewpoints movement theories to AI avatar\'s gestures',
            li5: 'Wrote scripts to parse live audience responses to questionnaire and playback inside Unity scene',
            li6: 'Implemented UI designs and functionalities for avatar setting management during live performance'
        },
        links: {
            //Description, link, type, image
            lk1: ['Full Performance (Edited)','https://youtu.be/39KtahFtd3s?si=3arvfdaqyrA_gP42', 'yt', ''],
            lk2: ['Full Performance (Unedited)','https://youtu.be/2769H-81EmI', 'yt', ''],
            lk3: ['LuminAI Project Site','https://expressivemachinery.gatech.edu/luminai/', 'a', '/assets/images/projects/luminai-poster.png' ],
        }
    },

    {
        title: 'GT OIT XR Projects',
        img: '/assets/images/projects/oit-campus.jpg',
        //link: 'https://github.com/connorwright1122/anim2spritesheet',
        details: {
            origin: 'GT OIT Academic/Research Technology Division',
            date: 'Spring 2024',
            tools: 'C#, Unity, Blender, LumaAI, NVIDIA Omniverse',
            description: 'Cross-organizational XR projects for virtual tours, simulations, photogrammetry, and digital twins',
        }
    },

    {
        title: 'Dun Dun Dungeon',
        img: '/assets/images/projects/DunDunDungeonLogo.png',
        link: 'https://connorwright1122.github.io/2340Team24Site/',
        details: {
            origin: 'CS 2340 - Objects & Design - Semester-Long Project',
            date: 'Fall 2023',
            tools: 'Java, Android Studio',
            description: 'Android game utilizing MVC architecture and design patterns',
        }
    },

    {
        title: 'VectorViz',
        img: '/assets/images/projects/VectorViz.png',
        link: 'https://devpost.com/software/vdbviz',
        details: {
            origin: 'AI ATL Hackathon 2023',
            date: 'Fall 2023',
            tools: 'Svelte, Python, GCP, OpenAI API, Flask, FAISS, BERT',
            description: 'Interactive nodal visualization / exploration / AI chat of vector databases',
            award1: '1st Place - BCGX Business Innovation Track',
            award2: 'Honorable Mention - Best Use of Google Cloud'
        }
    },

    {
        title: 'PantryPal',
        img: '/assets/images/projects/PantryPalLogo.png',
        link: 'https://devpost.com/software/pantry-pal-4aeqmh',
        details: {
            origin: 'HexLabs HackGT X',
            date: 'Fall 2023',
            tools: 'React.js, HTML/CSS/JS, Tesseract.js, Figma',
            description: 'Sustainable CV-powered kitchen recipe generator React web app',
        }
    },

    {
        title: 'Tron: Disc Wars XR',
        img: '/assets/images/projects/tron-xr.png',
        link: 'https://devpost.com/software/tron-lives',
        details: {
            origin: 'ImmerseGT XR Hackathon 2023',
            date: 'Spring 2023',
            tools: 'C#, Unity, Photon SDK, Meta Interaction SDK',
            description: 'Multiplayer co-location mixed-reality duels inspired by Tron: Legacy',
            award1: '1st Place - Virtual Adventures Track (Best in Sports & Gaming)'
        }
    },

    {
        title: 'uTime',
        img: '/assets/images/projects/uTimeApp.png',
        link: 'https://www.youtube.com/watch?v=3lNHDCUK9fY',
        details: {
            origin: 'GDSC Google Solutions Challenge 2023',
            date: 'Spring 2023',
            tools: 'Dart, Java, Flutter, Firebase, Figma',
            description: 'Cooperative screentime tracking app with friends system to combat technostress',
        }
    },

    {
        title: 'Buzz Cafe',
        img: '/assets/images/projects/buzzcafe-screenshot.png',
        link: 'https://devpost.com/software/buzzcafe',
        details: {
            origin: 'HexLabs Horizons Arts + Tech Hackathon 2023',
            date: 'Spring 2023',
            tools: 'C#, Unity, Meta Interaction SDK',
            description: 'Immersive VR social space and interactive art experience',
        }
    },

    {
        title: 'RUINAE + Unity Course Curriculum',
        img: '/assets/images/projects/GameDev/ruinae.png',
        link: 'https://conatordev.itch.io/ruinae',
        details: {
            origin: 'HS STEM Capstone',
            date: 'Fall 2021 - Spring 2022',
            tools: 'C#, Unity, Blender, Photoshop',
            description: 'Unity-based action-platformer game using custom 3D-to-2D sprite art pipeline',
        }
    },

    {
        title: 'STEM Lab Project Renovations',
        img: '/assets/images/projects/claw-machine.webp',
        link: 'https://www.youtube.com/watch?app=desktop&v=K7-B12MxqJo',
        details: {
            origin: 'HS STEM Computer Technology Class',
            date: 'Fall 2021 - Spring 2022',
            tools: 'C, C++, Arduino, Windows Batch Scripting',
            description: 'Renovations to Claw Machine (conversion to new Arduino motor library) and Arcade Machine (expanding emulator to play Unity and Python games)',
        }
    },

    {
        title: 'STEMobile Electric Vehicle',
        img: '/assets/images/projects/stemobile.webp',
        link: 'https://www.fellowshipchristianschool.org/academics/stem/major-projects/stemobile-build',
        details: {
            origin: 'HS STEM Junior Capstone',
            date: 'Fall 2020 - Spring 2021',
            tools: 'C, C++, Arduino',
            description: 'Digital Systems for Arduino-motor communication, led touchscreen UI design and integration',
        }
    },
];
  
export const gamedevData = [
    {
        title: 'Kaijumo!',
        img: '/assets/images/extras/gamedev/kaijumo.jpg',
        link: 'https://conatordev.itch.io/kaijumo',
        details: {
            origin: 'GMTK Game Jam 2024',
            date: 'Summer 2024',
            tools: 'C#, Unity, Blender',
            description: 'Mini-Kaiju arcade brawler inspired by classic Godzilla films',
        }
    },

    {
        title: 'Detective Deckname and the Universal Solvent',
        img: '/assets/images/extras/gamedev/deckname-poster-short.jpg',
        link: 'https://conatordev.itch.io/detective-deckname-and-the-universal-solvent',
        details: {
            origin: 'Pirate Software Game Jam 15',
            date: 'Summer 2024',
            tools: 'C#, Unity, Blender, YarnSpinner',
            description: 'Comedy-Mystery-Narrative-Puzzler in a Cyber-Noir world',
        }
    },

    {
        title: 'DEBUGGER',
        img: '/assets/images/extras/gamedev/DebuggerLogo.png',
        link: 'https://conatordev.itch.io/debugger',
        details: {
            origin: 'LMC 2700 - Computational Media - Final Project',
            date: 'Spring 2024',
            tools: 'C#, Unity, Blender',
            description: 'DOOM-style first person shooter',
        }
    },

    {
        title: 'Occipital Route',
        img: '/assets/images/extras/gamedev/occipitalroute.png',
        link: 'https://conatordev.itch.io/occipital-route',
        details: {
            origin: 'GMTK Game Jam 2023',
            date: 'Summer 2023',
            tools: 'C#, Unity, Blender',
            description: 'Reverse-survival-horror where you play as the monster hunting a speedrunner',
        }
    },

    {
        title: 'Die Recast',
        img: '/assets/images/extras/gamedev/dierecast.png',
        link: 'https://conatordev.itch.io/die-recast',
        details: {
            origin: 'GMTK Game Jam 2022',
            date: 'Summer 2022',
            tools: 'C#, Unity, Blender',
            description: 'Isometric physics-based roguelite boss battle',
        }
    },

    {
        title: 'To USB',
        img: '/assets/images/extras/gamedev/tousb.png',
        link: 'https://conatordev.itch.io/to-usb',
        details: {
            origin: 'Lost Relic Game Jam 2022',
            date: 'Summer 2022',
            tools: 'C#, Unity, Blender',
            description: 'Rage-bait 3D platformer',
        }
    },

    {
        title: 'Ruinae',
        img: '/assets/images/projects/GameDev/ruinae.png',
        link: 'https://conatordev.itch.io/ruinae',
        details: {
            origin: 'HS STEM Capstone',
            date: 'Fall 2021 - Spring 2022',
            tools: 'C#, Unity, Blender',
            description: '2D Action Platformer with a custom 3D-to-2D sprite art pipeline',
        }
    },

    {
        title: 'Ragduel',
        img: '/assets/images/projects/GameDev/ragduel.png',
        link: 'https://conatordev.itch.io/ragduel',
        details: {
            origin: 'GMTK Game Jam 2023',
            date: 'Spring 2022',
            tools: 'C#, Unity, Blender',
            description: 'First person ragdoll physics-based arena combat',
        }
    },
];