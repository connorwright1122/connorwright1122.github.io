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
            tools: 'Figma, Photoshop'
        },
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
    },

    {
        title: 'Undergraduate Researcher',
        img: '/assets/images/experience/gt-vip.jpeg',
        //link: 'https://expressivemachinery.gatech.edu/projects/luminai/',
        details: {
            origin: 'GT VIP - Unlocking and Analyzing Historical Texts',
            date: 'Spring 2024 - Spring 2025',
            tools: 'C#, NoSQL, MongoDB, Unity, Blender'
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
        link: 'https://github.gatech.edu/pages/riyer75/4641/',
        details: {
            origin: 'Hi-Rez Studios',
            date: 'Summer 2024 - Spring 2025',
            tools: 'Unreal Engine, Python/PyTorch/Pandas, InvokeAI',
            description: 'AI-powered tools and workflows for dataset generation, model training, and AI-generated image segmentation',
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