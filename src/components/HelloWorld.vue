<template>
  <div class="main-body">
      <div class="container-fluid">
        
        <!-- Navigation Bar -->
        <nav class="navbar navbar-light bg-indigo-400 my-2 rounded hover:shadow">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="/images/4.jpg" alt="" width="30" height="24" class="d-inline-block align-top">
              <span class="font-sanserif px-4 text-xl font-semibold">Adeola's Portfolio</span>
            </a>
            <div class="flex justify-end">
              <!-- Mobile Button -->
              <a href="#header" class="px-3 hover:text-white hover:shadow rounded py-2"><i class="fa fa-home"></i></a>
              <!-- Mobile Button -->
            </div>
          </div>
        </nav>
        <!-- Navigation Bar Ends -->
        <!-- Content Area -->
        <div class="my-4 rounded-tr-3xl sm:rounded-bl-3xl  content border border-purple-400 overflow-auto py-2 ">
          <div class="container py-4">
            <!-- Header -->
            <div id="header" class="py-4">
                <p class="text-center display-5">My name is <span class="font-semibold">Bada Adeola O.</span></p>
                <p class="text-center h3 my-3 display-6">Welcome to my Portfolio</p>
            </div>
            <!-- Header Ends -->
            <!-- Introduction -->
            <div class="row">
              <div class="col-md-6 col-sm-12 mb1">
              <div class="container">
                <figure class="figure">
                  <img src="/images/4.jpg" class="figure-img img-fluid rounded" alt="...">
                </figure>
              </div>
              <!-- Connect with me -->
               <div>
                  <p class="text-center py-3 h5">Lets be social</p>
                  <ul class="flex justify-between container">
                      <li><a class="btn border-indigo-400 py-1 px-2 shadow hover:bg-indigo-400 hover:text-white animate-pulse" target="_blank" href="linkedin.com/in/adeola-bada-aiism-a51174124"><i class="fab fa-linkedin fa-2x mr-auto"></i> </a></li>
                      <li><a class="btn border-indigo-400 py-1 px-2 shadow hover:bg-indigo-400 hover:text-white animate-pulse" target="_blank" href="https://instagram.com/mr_.dee" ><i class="fab fa-instagram fa-2x mr-auto"></i> </a></li>
                      <li><a class="btn border-indigo-400 py-1 px-2 shadow hover:bg-indigo-400 hover:text-white animate-pulse" target="_blank" href="https://twitter.com/adeolabada1"><i class="fab fa-twitter fa-2x mr-auto"></i></a></li>
                      <li><a class="btn border-indigo-400 py-1 px-2 shadow hover:bg-indigo-400 hover:text-white animate-pulse" target="_blank" href="https://github.com/codeDeeAi"><i class="fab fa-github fa-2x mr-auto"></i></a></li>
                  </ul> 
               </div>
                <!-- Connect with me ends -->
              </div>
              <div class="col-md-6 col-sm-12">
                <article class="py-4">                                
                <p class="h3 py-3">A brief intro about me</p>
                <p>
                    I am a graduate of Civil Engineering from  Federal University, Oye-Ekiti, Nigeria.
                    My Interest in computers has led me to pursue a career in software development which serves a medium of bringing my ideas to the limelight. <br>
                    I'm a self taught software developer whose interest lies in providing fast, simple, easy to use and efficient solutions to  people who need them.
                </p>
                <p class="h3 py-3">Skills </p>
                <p>
                <ul class="list-inside list-disc">
                    <li>Business Analysis</li>
                    <li>Good knowledge of HTML, CSS, JavaScript, VueJS, Php, Laravel & SQL</li>
                    <li>Good understanding of Version Control (Git and GitHub)</li>
                    <li>Adequate understanding of Bootstrap, Materialize CSS and Tailwind</li>
                    <li>Manual testing of web-based applications</li>
                    <li>Problem solving skils</li>
                    <li>Learn Fast and open to more learning opportunities</li>
                </ul>
                </p>
                </article>                
              </div>
            </div>
            <!-- Introduction Ends -->
            <!-- Projects -->
            <!-- Project Header -->
            <div class="py-4">
                <p class="text-center h2 py-4 px-4 shadow-inner">Projects</p>
            </div>
            <!-- Project Header Ends -->
            <!-- Project Content -->
            <div class="justify-around grid md:grid-cols-2 sm:grid-cols-1">
              <div v-for="(pro, i) in  projects" :key="i" class="rounded-tr-3xl rounded-bl-3xl hover:shadow project-box">
                <div class="container py-3">
                    <div class="project-description-box py-4">
                      <div class="main-box shadow rounded-bl-3xl rounded-tr-3xl bg-indigo-400 py-6 px-4">
                        <p class="text-lg font-bold py-2">{{pro.title}}</p>
                        <div class="shadow-inner rounded my-2 py-2">
                          {{pro.details}}
                        </div>
                      </div>
                      <div class="content-box shadow rounded-bl-3xl rounded-tr-3xl bg-gray-400 py-4">
                        <p class="text-center py-2">Top Language Used</p>
                        <ul class="list-inside list-disc px-6">
                          <li v-for="(topL, t) in pro.languages" :key="t">{{topL}}</li>
                      </ul>
                      </div>
                    </div>
                    <div class="project-options-box grid grid-cols-2 justify-between py-1 pb-2">
                      <div class="flex justify-start">
                        <a v-if="pro.git" :href="pro.git" class="hover:bg-indigo-400 hover:text-white shadow-md mx-2 py-2 px-4 rounded-full">GitHub</a>
                        <a v-if="pro.web" :href="pro.web" class="hover:bg-indigo-400 hover:text-white shadow-md mx-2 py-2 px-4 rounded-full">Web</a>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <!-- Project Content Ends -->
            <!-- Projects End -->
            <!-- Contact Us -->
            <div id="contact" class="">
                <div class="container md:px-20 sm:px-10 my-4 shadow-inner py-4">
                  <ul class="flex justify-between container">
                      <li><a class="btn border-indigo-400 py-1 px-2 shadow hover:bg-indigo-400 hover:text-white animate-pulse" target="_blank" href="linkedin.com/in/adeola-bada-aiism-a51174124"><i class="fab fa-linkedin fa-2x mr-auto"></i> </a></li>
                      <li><a class="btn border-indigo-400 py-1 px-2 shadow hover:bg-indigo-400 hover:text-white animate-pulse" target="_blank" href="https://instagram.com/mr_.dee" ><i class="fab fa-instagram fa-2x mr-auto"></i> </a></li>
                      <li><a class="btn border-indigo-400 py-1 px-2 shadow hover:bg-indigo-400 hover:text-white animate-pulse" target="_blank" href="https://twitter.com/adeolabada1"><i class="fab fa-twitter fa-2x mr-auto"></i></a></li>
                      <li><a class="btn border-indigo-400 py-1 px-2 shadow hover:bg-indigo-400 hover:text-white animate-pulse" target="_blank" href="https://github.com/codeDeeAi"><i class="fab fa-github fa-2x mr-auto"></i></a></li>
                      <li><a class="btn border-indigo-400 py-1 px-2 shadow hover:bg-indigo-400 hover:text-white animate-pulse" target="_blank" href="mailto:dunsin.bada@gmail.com" ><i class="far fa-envelope fa-2x mr-auto"></i></a> </li>
                  </ul> 
                </div>
            </div>
            <!-- Contact Ends -->
          </div>
        </div>
        <!-- Content Area  Ends -->        
        <!-- Footer -->
        <div class="flex justify-center bg-indigo-400 rounded hover:shadow py-2">
          <p class="text-center">{{ 'Copyright'+ ' ' + '©' + cur() }}  {{ ' ' + copyright }}<a href=" https://instagram.com/mr_.dee" target="_blank" class="hover:text-white font-bold">{{ name }}</a></p>
        </div>
        <!-- Footer Ends -->
      </div>
      <!-- Body Ends -->
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      copyright: " All rights reserved | Designed by ",
      name: "Bada Adeola O.",
      projects:[
                {
                    title: 'Vue Js Windows History Buttons',
                    details: "A highly customizable Vue Js 3 plugin for controlling browser history pages (next and previous)",
                    languages:['JavaScript', 'Vue Js'],
                    git:'https://github.com/codeDeeAi/vue-window-history-control-buttons.git',
                    web:''
                },
                {
                    title: 'Get Jokes Page',
                    details: "A simple webpage with  HTML, CSS, Tailwind Css, JavaScript, and Vue Js that gets jokes from an open source API based on the user's filters",
                    languages:['JavaScript', 'Vue Js'],
                    git:'https://github.com/codeDeeAi/get_jokes_from_open_source_api.git',
                    web:''
                },
                {
                    title: 'Portfolio (WebApp)',
                    details: "My new Portfolio designed with Laravel 8 and Vue Js , to showcase some of the works done by me",
                    languages:['Laravel 8', 'Vue Js', 'Sql'],
                    git:'https://github.com/codeDeeAi/New-Portfolio.git',
                    web:''
                },
                {
                    title: 'OneHourToDo Application',
                    details: "A Project Based on a challenge to build a ToDo App with Laravel and Vue Js unde One Hour",
                    languages:['Laravel 8', 'Vue Js', 'Sql'],
                    git:'https://github.com/codeDeeAi/ToDoApp.git',
                    web:''
                },
                {
                    title: 'LaraBlog',
                    details: "      A Blog web app with Laravel and Vue Js, it has some very important and unique features, most importantly it can be fully customized by the administrator. It also features user roles and permission at the admin panel",
                    languages:['Laravel 7', 'Vue Js', 'Sql'],
                    git:'https://github.com/codeDeeAi/Larablog.git',
                    web:''
                },
                {
                    title: 'TFLM',
                    details: "An NGO and Ministry web app with Php and Javascript",
                    languages:['JavaScript', 'Php', 'Sql'],
                    git:'https://github.com/codeDeeAi/TFLM.git',
                    web:''
                },
                {
                    title: 'KYC Loan App',
                    details: "An app designed with Php, which shows the simple process of loan verification of a bank XYZ",
                    languages:['JavaScript', 'Php', 'Sql'],
                    git:'https://github.com/codeDeeAi/kyc-loan-app.git',
                    web:''
                },
               {
                    title: 'RyseHub',
                    details: "A simple functional e-commerce web app with just HTML, CSS, bootstrap, JavaScript, VueJS and Firebase ",
                    languages:['JavaScript', 'Vue Js', 'Firebase'],
                    git:'',
                    web:'http://www.rysehub.com.ng'
                },
                {
                    title: 'Twitter',
                    details: "A simple recreation of twitter's landing page with just HTML, CSS, bootstrap and Simple JavaScript",
                    languages:['JavaScript'],
                    git:'https://github.com/codeDeeAi/Twitter.git',
                    web:''
                },
                {
                    title: 'Diamond Bridge of Desmond',
                    details: "A simple webpage with  HTML, CSS, bootstrap, JavaScript, Vue Js and Materialize CSS ",
                    languages:['JavaScript', 'Vue Js'],
                    git:'https://github.com/codeDeeAi/Diamond-Bridge-.git',
                    web:'https://www.diamondbridgeofdesmond.com'
                },
                {
                    title: 'Bwort',
                    details: "A simple landing page for a laundry business with just HTML, CSS, bootstrap and JavaScript",
                    languages:['JavaScript'],
                    git:'https://github.com/codeDeeAi/Bwort.git',
                    web:''
                },
                {
                    title: 'Sunview',
                    details: "A simple landing page with just HTML, CSS, bootstrap and Simple JavaScript. Created to show the different ways carousels and grids can be used",
                    languages:['JavaScript'],
                    git:'https://github.com/codeDeeAi/sunny.git',
                    web:''
                },
                {
                    title: 'My Old Portfolio',
                    details: "A landing page with  HTML, CSS , bootstrap, Simple JavaScript and VueJS. Created to show the various designs made by me",
                    languages:['JavaScript', 'Vue Js'],
                    git:'https://github.com/codeDeeAi/Portfolio.git',
                    web:''
                },
      ]
    };
  },
  methods: {
    cur() {
      return new Date().getFullYear();
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
/* Main Body */
.main-body {
  height: 100vh;
}

/* Content Area */
.main-body .content {
  height: 80vh;
}

/* Project Box */
.project-box {
  height: 315px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  transform-style: preserve-3d;
}
.project-description-box {
  height: 250px;
  position: relative;
  width: 100%;
  perspective: 1000px;
  overflow: hidden;
  transform-style: preserve-3d;
}

.project-description-box .main-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: top;
  transform-style: preserve-3d;
  transition: 0.5s;
  opacity: 1;
}
.project-description-box .content-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #333;
  justify-content: center;
  align-items: center;
  transform-origin: bottom;
  transform-style: preserve-3d;
  transition: 0.5s;
  transform: rotateY(90deg);
  opacity: 0;
  color: #fff;
}
.project-description-box:hover > .main-box {
  transform: rotateY(-90deg);
  opacity: 0;
  transition-delay: 0.2s;
  cursor: grab;
}

.project-description-box:hover > .content-box {
  transform: rotateY(0deg);
  opacity: 1;
  transition-delay: 0.2s;
  height: 100%;
  cursor: pointer;
  box-shadow: inset -4px -4px 6px rgba(255, 255, 255, 0.1),
    inset 4px 4px 6px rgba(0, 0, 0.8);
}


</style>
